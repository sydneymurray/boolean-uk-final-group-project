import create from "zustand";
import {LATEST_LISTINGS} from "../components/dbURLS"

type Store = {
  modal: string,
  setModal: (modalName: string) => void,
  latestListings: Listing[] | null,
  setLatestListings: (filteredListings:Listing[]) => void
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
  latestListings: null,
  setLatestListings: (filteredListings:Listing[]) => {
    set((store) => ({
      latestListings: filteredListings
    }))
  },
  newUser: null,
  setUser: (user: newUserType) => {
    set((store) => ({
      newUser: user,
    }))
  },
}))


