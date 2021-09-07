import create from "zustand";
import {LATEST_LISTINGS} from "../components/dbURLS"
import {REGISTER_NEW_USER} from "../components/dbURLS"

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
  name: string,
  userName: string;
  email: string;
  password: string;
};

type Listing = {
  id: Number,
  User: {
    name: string
  },
  Track: {
    artistName: string,
    trackName: string,
    coverURL: string
  } | null,
  Album: object | null,
  price: Number,
  forSale: boolean,
  notes: string,
  condition: string,
  format: string,
  dateAdded: string
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
  retrieveListings: () => {
    fetch("http://localhost:3100/listings")
    .then(res=>res.json())
    .then((data:{
      data: Listing[]
    })=>{
      set(store=>({listings: data.data}))
    })
  },
  newUser: null,
  setUser: (user: newUserType) => {set((store) => ({newUser: user}))}
}))






