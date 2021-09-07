import React from "react";
import "../styles/RenderTrack.css";

type Prop = {
  listing: {
    track: { coverURL: string; trackName: string; artistName: string };
    owner: { name: string };
    condition: string;
    format: string;
    price: number;
    notes: string;
    dateAdded: string;
  };
};

export default function RenderListing({ listing }: Prop) {
  return (
    <>
      <article className="listing-article">
        <div className="recordImage">
          <img
            className="albumImage"
            src={listing.track.coverURL}
            alt="Beanie Man Album"
          />
        </div>
        <div className="recordInfoDb">
          <div className="artistCardTextInfo">
            Artist: {listing.track.artistName}
          </div>
          <div className="artistCardTextInfo">
            Song: {listing.track.trackName}
          </div>
          <div className="artistCardTextInfo">
            Condition: {listing.condition}
          </div>
          <div className="artistCardTextInfo">
            Sold By: {listing.owner.name}
          </div>
          <div className="artistCardTextInfo">Price: {listing.price}</div>
        </div>
        <div className="recordCardButtons">
          <button className="recordBuyButtn">Buy</button>
          <button className="recordFavBttn">Add to Favourites</button>
        </div>
      </article>
    </>
  );
}
