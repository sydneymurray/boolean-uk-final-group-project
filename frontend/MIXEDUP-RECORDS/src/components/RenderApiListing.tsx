import React from "react";
import "../styles/RenderTrack.css";

type Prop = {
  apiListing: {
    artistName: string;
    trackName: string;
    albumName: string;
    coverURL: string;
  };
};

export default function RenderApiListing({ apiListing }: Prop) {
  return (
    <>
      <article className="listing-article">
        <div className="recordImage">
          <img
            className="albumImage"
            src={apiListing.coverURL}
            alt={apiListing.artistName}
          />
        </div>
        <div className="recordInfoDb">
          <div className="artistCardTextInfo">
            Artist: {apiListing.artistName}
          </div>

          <div className="artistCardTextInfo">
            Track: {apiListing.trackName}
          </div>

          <div className="albumCardTextInfo">Album: {apiListing.trackName}</div>
        </div>
        <div className="recordCardButtons">
          <button className="recordBuyButtn">Sell this item</button>
        </div>
      </article>
    </>
  );
}
