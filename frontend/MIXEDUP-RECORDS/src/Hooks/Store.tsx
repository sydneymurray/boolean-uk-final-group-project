import create from "zustand";

import { LATEST_LISTINGS } from "../components/dbURLS";
import { REGISTER_NEW_USER } from "../components/dbURLS";
import { FAVOURITES } from "../components/dbURLS";

// IMPORT DUMMY DATA UNTIL BACKEND IS COMPLETE
import { dummyListings } from "../components/dummyData";

type Store = {
  modal: string;
  modalData: ModalData | undefined;
  setModal: (modalName: string, modalData?: ModalData) => void;
  listings: Listing[] | null;
  filteredListings: Listing[] | null;
  setfilteredListings: (filteredListings: Listing[]) => void;
  retrieveListings: () => void;
  newUser: newUserType | null;
  setUser: (newUser: newUserType) => void;
  favourites: {}[] | null;
  retrieveFavourites: () => void;
  searchcriteria: string;
  setSearchcriteria: (criteria: string) => void;
};

type newUserType = {
  name: string;
  userName: string;
  email: string;
  password: string;
};

type Listing = {
  id: number;
  User: {
    name: string;
  };
  Track: {
    artistName: string;
    trackName: string;
    coverURL: string;
  } | null;
  Album: object | null;
  price: number;
  forSale: boolean;
  notes: string;
  condition: string;
  format: string;
  dateAdded: string;
};

type ModalData = {
  [key: string]: string;
};

export const useStore = create<Store>((set, get) => ({
  modal: "",
  setModal: (modalName: string, modalData?: ModalData) => {
    set((store) => ({
      modal: modalName,
      modalData: modalData,
    }));
  },
  modalData: {},

  listings: null,
  filteredListings: null,
  setfilteredListings: (filteredListings: Listing[]) => {
    set((store) => ({ filteredListings: filteredListings }));
  },
  retrieveListings: () => {
    fetch(LATEST_LISTINGS)
      .then((res) => res.json())
      .then((data: { data: Listing[] }) => {
        set((store) => ({ listings: data.data }));
      });
  },
  newUser: null,

  setUser: (user: newUserType) => {
    set((store) => ({ newUser: user }));
  },
  favourites: null,
  retrieveFavourites: () => {
    fetch(LATEST_LISTINGS)
      .then((res) => res.json())
      .then((data: { data: {}[] }) => {
        set((store) => ({ favourites: data.data }));
      });
  },
  searchcriteria: "",
  setSearchcriteria: (criteria: string) => {
    set((store) => ({ searchcriteria: criteria }));
  },
}));
