import React from "react"
import "../styles/RenderTrack.css"
import { useStore } from "../Hooks/Store";
import { SyntheticEvent } from "react"
import { TRANSACTIONS_URL } from "./dbURLS";

type Prop = {
  listing: listing;
};

type listing = {
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

export default function RenderTrack({ listing }: Prop) {
  const setModal = useStore((store) => store.setModal);
  let retrieveFavourites = useStore((store) => store.retrieveFavourites)
  let selectedListing = useStore((store) => store.selectedListing)
  let setSelectedListing = useStore((store) => store.setSelectedListing) 
  let addFavourite = useStore((store) => store.addFavourite)  
  let favourites = useStore(store => store.favourites)

  function displayDetails(){
    setSelectedListing(listing)
    setModal("favouriteDetails")
  }

  function addToFavourites(){
    let  index = favourites ? favourites.findIndex(fav => {
          return fav.listing === listing.id
      }) : -1
    if (index !== -1) return 
    addFavourite(listing.id)
    retrieveFavourites()
  }

  function listingPurchased(e: SyntheticEvent) {
    fetch(TRANSACTIONS_URL,{
       credentials: "include",
       method: "POST",
       headers: {
         "Content-Type":"application/json"
       },
       body: JSON.stringify({
         listing: listing.id
       }) 
    })
    .then(res=>{
      if (res.ok) {
          setModal("buyItem");
      }else setModal("failedPurchase")
    })
  }
  
  
  return (
    <>
      <article className="listing-article" key={listing.id}>
        <div className="recordImage" onClick={() => displayDetails()}>
          <img
            className="albumImage"
            src={listing.Track?.coverURL || listing.Album?.coverURL}
            alt={listing.Track?.trackName || listing.Album?.albumname}
          />
        </div>
        <div className="recordInfoDb">
          <div className="artistCardTextInfo">
            Artist: {listing.Track?.artistName || listing.Album?.artist}
          </div>
          <div className="artistCardTextInfo">
            {listing.Track ? `Song: ${listing.Track?.trackName}` : `Album: ${listing.Album?.albumname}`}
          </div>
          <div className="artistCardTextInfo">
            Condition: {listing.condition}
          </div>
          <div className="artistCardTextInfo">
            Sold By: {listing.User.username}
          </div>
          <div className="artistCardTextInfo">Price: ${listing.price}</div>
        </div>
        <div className="recordCardButtons">
          <button className="recordBuyButtn" onClick={listingPurchased}>Buy</button>
        
          <button className="recordFavBttn" onClick={() => addToFavourites()}>Add to Favourites</button>
        </div>
      </article>
    </>
  )
  }