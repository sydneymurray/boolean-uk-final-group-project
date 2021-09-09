import create from "zustand";
import {LATEST_LISTINGS} from "../components/dbURLS"
import {REGISTER_NEW_USER} from "../components/dbURLS"
import {FAVOURITES} from "../components/dbURLS"

// IMPORT DUMMY DATA UNTIL BACKEND IS COMPLETE
import {dummyListings} from "../components/dummyData"
import Favourites from "../pages/Favourites";


type Store = {
  modal: string,
  setModal: (modalName: string) => void
  listings: Listing[] | null
  filteredListings: Listing[] | null
  setfilteredListings: (filteredListings:Listing[]) => void
  retrieveListings: () => void
  newUser: newUserType | null
  setUser: (newUser: newUserType) => void
  favourites: Favourite[] | null
  retrieveFavourites: () => void
  deleteFavourite: (id: number) => void
  setFavourites: (updatedFavourite: Favourite[]) => void
  selectedListing: Listings | null
  setSelectedListing: (listing: Listings) => void
  addFavourite: (id: number) => void
};

type newUserType = {
  name: string,
  userName: string;
  email: string;
  password: string;
};

type Listing = {
  id: number,
  User: {
    name: string
  },
  Track: {
    artistName: string,
    trackName: string,
    coverURL: string
  } | null,
  Album: object | null,
  price: number,
  forSale: boolean,
  notes: string,
  condition: string,
  format: string,
  dateAdded: string
}

type Favourite = {
  id: number
  user: number
  listing: number
  Listings: Listings | listing
  }

 type Listings = {
  id: number
  user: number
  track: number
  price: number
  forSale: boolean
  notes: string
  condition: string
  format: string
  dateAdded: string
  albumId: number | null
  Track: Track
}

type Track = {
  id: number
  artistName: string,
  trackName: string,
  coverURL: string
} 
type listing = Listings


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
    fetch(LATEST_LISTINGS)
    .then(res=>res.json())
    .then((data:{
      data: Listing[]
    })=>{
      set(store=>({listings: data.data}))
    })
  },
  newUser: null,
  setUser: (user: newUserType) => {set((store) => ({newUser: user}))},
  favourites: null,
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
    fetch(FAVOURITES+"/"+id, {
      method:'POST',
      credentials: 'include',
      headers:{'Content-Type': 'Application/json'},
      body: JSON.stringify({})
    })
  },
  setFavourites: updatedFavourites => set(store => ({ 
    favourites: updatedFavourites})),
  selectedListing: null,
  setSelectedListing: listings => set(store => ({ 
    selectedListing: listings})),
}))





