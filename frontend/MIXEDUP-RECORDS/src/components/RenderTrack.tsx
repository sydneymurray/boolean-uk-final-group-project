import React from "react"
import "../styles/RenderTrack.css"

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


export default function RenderTrack({listing}:Prop){
  
  return<>
    <article className="listing-article">
      <div className="recordImage">
        <img className="albumImage"
          src={listing.coverURL} alt="Beanie Man Album"/>
      </div>
        <div className="recordInfoDb">
        <div className="artistCardTextInfo">Artist: {listing.artistName}</div>
        <div className="artistCardTextInfo">Song: {listing.trackName}</div>       
        <div className="artistCardTextInfo">Condition: {listing.condition}</div>
        <div className="artistCardTextInfo">Sold By: {listing.owner}</div>
        <div className="artistCardTextInfo">Price: ${listing.price}</div>
      </div>
      <div className="recordCardButtons">
        <button className="recordBuyButtn">Buy</button>
        <button className="recordFavBttn">Add to Favourites</button>
      </div>
    </article> 
  </>
}

