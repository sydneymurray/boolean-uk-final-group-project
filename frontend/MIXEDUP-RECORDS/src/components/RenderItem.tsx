import React from "react"
import "../styles/RenderTrack.css"
import { useStore, listing } from "../Hooks/Store";

type Prop = {
  item: item;
  transactionType: string
};

export type item = {
 Listing: listing,
  previous_owner: {
    username: string
  },
  new_owner: {
    username: string
  }
};

export default function RenderItem({ item, transactionType }: Prop) {
  let selectedListing = useStore((store) => store.selectedListing)
  let setSelectedListing = useStore((store) => store.setSelectedListing)
  const setModal = useStore((store)=> store.setModal) 

  function displayDetails(){
    setSelectedListing(item)
    setModal("favouriteDetails")
  }
  
  return (
    <>
      <article className="listing-article">
        <div className="recordImage" onClick={() => displayDetails()}>
          <img
            className="albumImage"
            src={item.Listing.Track?.coverURL || item.Listing.Album?.coverURL}
            alt={item.Listing.Track?.trackName || item.Listing.Album?.albumname}
          />
        </div>
        <div className="recordInfoDb">
          <div className="artistCardTextInfo">
            Artist: {item.Listing.Track?.artistName || item.Listing.Album?.artist}
          </div>
          <div className="artistCardTextInfo">
            {item.Listing.Track ? `Song: ${item.Listing.Track?.trackName}` : `Album: ${item.Listing.Album?.albumname}`}
          </div>
          <div className="artistCardTextInfo">
            Condition: {item.Listing.condition}
          </div>
          <div className="artistCardTextInfo">
            {transactionType === "sold" ? `Buyer: ${item.new_owner.username}` : `Seller: ${item.previous_owner.username}`}
          </div>
          <div className="artistCardTextInfo">Price: ${item.Listing.price}</div>
        </div>
      </article>
    </>
  )
  }