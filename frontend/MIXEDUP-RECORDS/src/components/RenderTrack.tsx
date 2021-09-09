import React from "react"
import "../styles/RenderTrack.css"
import { useStore } from "../Hooks/Store";

type Prop = {
  listing : listing
}

type listing = {
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
//type Listings = listing

export default function RenderTrack({listing}:Prop){
  const setModal = useStore((store) => store.setModal);
  let setFavourites = useStore((store) => store.setFavourites)
  let selectedListing = useStore((store) => store.selectedListing)
  let setSelectedListing = useStore((store) => store.setSelectedListing) 
  let addFavourite = useStore((store) => store.addFavourite)  

  function displayDetails(){
    setSelectedListing(listing)
    setModal("favouriteDetails")
  }

  function addToFavourites(){
      console.log(listing)
    //addFavourite(listing.id)
    
  }
  
  
  return<>
    <article className="listing-article" key={listing.id}>
      <div className="recordImage" onClick={() => displayDetails()}>
        <img className="albumImage"
          src={listing.Track?.coverURL} alt={listing.Track?.trackName}/>
      </div>
        <div className="recordInfoDb">
        <div className="artistCardTextInfo">Artist: {listing.Track?.artistName}</div>
        <div className="artistCardTextInfo">Song: {listing.Track?.trackName}</div>       
        <div className="artistCardTextInfo">Condition: {listing.condition}</div>
        <div className="artistCardTextInfo">Sold By: {listing.User.name}</div>
        <div className="artistCardTextInfo">Price: ${listing.price}</div>
      </div>
      <div className="recordCardButtons">
        <button className="recordBuyButtn">Buy</button>
        <button className="recordFavBttn" onClick={() => addToFavourites()}>
          Add to Favourites</button>
      </div>
    </article> 
  </>
}

/*
type Prop = {
  listing: {
    artistName:string,
    trackName:string,
    owner:string,
    coverURL:string,
    condition:string,
    format:string,
    price:number
  }
}
*/

