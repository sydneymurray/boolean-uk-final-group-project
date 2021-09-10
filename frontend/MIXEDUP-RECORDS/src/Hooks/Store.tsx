import create from "zustand";
import { LATEST_LISTINGS } from "../components/dbURLS";
import { REGISTER_NEW_USER } from "../components/dbURLS";
import { FAVOURITES } from "../components/dbURLS";
// IMPORT DUMMY DATA UNTIL BACKEND IS COMPLETE
import {dummyListings} from "../components/dummyData"
import Favourites from "../pages/Favourites";
import { item } from "../components/RenderItem"

type Store = {
  modal: string;
  modalData: ModalData | undefined;
  setModal: (modalName: string, modalData?: ModalData) => void;
  listings: listing[] | null;
  filteredListings: listing[] | null;
  setfilteredListings: (filteredListings: listing[]) => void;
  retrieveListings: () => void;
  newUser: newUserType | null;
  setUser: (newUser: newUserType) => void;
  searchcriteria: string;
  setSearchcriteria: (criteria: string) => void;
  favourites: Favourite[] | null
  retrieveFavourites: () => void
  deleteFavourite: (id: number) => void
  setFavourites: (updatedFavourite: Favourite[]) => void
  selectedListing: listing | null | item
  setSelectedListing: (listing: listing | item) => void
  addFavourite: (id: number) => void
};

type newUserType = {
  name: string;
  userName: string;
  email: string;
  password: string;
};

export type listing = {
  id: number;
  User: {
    username: string;
  };
  Track: {
    artistName: string;
    trackName: string;
    coverURL: string;
  } | null;
  Album: {
    artist: string,
    albumname: string,
    coverURL: string
  } | null;
  price: number;
  forSale: boolean;
  notes: string;
  condition: string;
  format: string;
  dateAdded: string;
};

export type ModalData = {
  [key: string]: string;
};

type Favourite = {
  id: number
  user: number
  listing: number
  Listings: listing
  }

type Track = {
  id: number
  artistName: string,
  trackName: string,
  coverURL: string
} 


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
  setfilteredListings: (filteredListings: listing[]) => {
    set((store) => ({ filteredListings: filteredListings }));
  },
  retrieveListings: () => {
    fetch(LATEST_LISTINGS)
      .then((res) => res.json())
      .then((data: { data: listing[] }) => {
        set((store) => ({ listings: data.data }));
      });
  },
  newUser: null,

  setUser: (user: newUserType) => {
    set((store) => ({ newUser: user }));
  },
  favourites: null,
  searchcriteria: "",
  setSearchcriteria: (criteria: string) => {
    set((store) => ({ searchcriteria: criteria }));
  },
  retrieveFavourites: () => {
    fetch(FAVOURITES,{credentials: "include"})
    .then(res=>res.json())
    .then((data:{
      data: Favourite[]
    })=>{
      set(store=>({favourites: data.data}))
    })
  },
  deleteFavourite: (id) => {
    fetch(FAVOURITES+"/"+id,{method:'DELETE',credentials: 'include'})
  },
  addFavourite: (id) => {
    fetch(FAVOURITES+"/add", {
      method:'POST',
      credentials: 'include',
      headers:{'Content-Type': 'Application/json'},
      body: JSON.stringify({listing: id})
    })
    .then(res=>{
      if (res.ok) get().setModal("favourteAdded")
      else get().setModal("failedFavourite")
    })
  },
  setFavourites: updatedFavourites => set(store => ({ 
    favourites: updatedFavourites})),
  selectedListing: null,
  setSelectedListing: listings => set(store => ({ 
    selectedListing: listings})),
}))