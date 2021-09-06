import create from "zustand";
import {LATEST_LISTINGS} from "../components/dbURLS"

// IMPORT DUMMY DATA UNTIL BACKEND IS COMPLETE
import {dummyListings} from "../components/dummyData"


type Store = {
  modal: string,
  setModal: (modalName: string) => void,
  listings: Listing[] | null,
  filteredListings: Listing[] | null,
  setfilteredListings: (filteredListings:Listing[]) => void
  retrieveListings: () => void
  newUser: newUserType | null;
  setUser: (newUser: newUserType) => void;
};

type newUserType = {
   userName: string;
  email: string;
  password: string;
};

type Listing = {
  artistName:string,
  trackName:string,
  owner:string,
  coverURL:string,
  condition:string,
  format:string,
  price:number
}


export const useStore = create<Store>((set, get) => ({
  modal: "",
  setModal: (modalName: string) => {
    set((store) => ({
      modal: modalName,
    }))
  },
  listings: null,
  filteredListings: null,
  setfilteredListings: (filteredListings:Listing[]) => {set((store) => ({filteredListings: filteredListings }))},
  retrieveListings: () => {set((store) => ({
    listings: dummyListings,
    filteredListings: dummyListings}))},
  newUser: null,
  setUser: (user: newUserType) => {set((store) => ({newUser: user}))}
}))






