import React from "react";
import "../styles/RenderTrack.css";

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
  return (
    <>
      <article className="listing-article" key={listing.id}>
        <div className="recordImage">
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
          <button className="recordBuyButtn">Buy</button>
          <button className="recordFavBttn">Add to Favourites</button>
        </div>
      </article>
    </>
  );
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
