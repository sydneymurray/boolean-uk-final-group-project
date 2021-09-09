import React from "react";
import { useStore } from "../Hooks/Store";
import "../styles/RenderTrack.css";

type Prop = {
  apiListing: ApiListing;
};

export type ApiListing = {
  artistName: string;
  trackName: string;
  albumName: string;
  coverURL: string;
};

export default function RenderSellListing({ apiListing }: Prop) {
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
      </article>
    </>
  );
}
