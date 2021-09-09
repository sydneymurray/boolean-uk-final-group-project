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

export default function RenderApiListing({ apiListing }: Prop) {
  const setModal = useStore((store) => store.setModal);

  function buyButtonClicked(apiListing: ApiListing) {
    setModal("sellItem", apiListing);
  }

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

          <div className="albumCardTextInfo">Album/EP: {apiListing.albumName}</div>
        </div>
        <div className="recordCardButtons">
          <button
            className="recordBuyButtn"
            onClick={() => {
              buyButtonClicked(apiListing);
            }}
          >
            Sell this item
          </button>
        </div>
      </article>
    </>
  );
}

// type Prop = {
//   apiListing: {
//     artistName: string;
//     trackName: string;
//     albumName: string;
//     coverURL: string;
//   };
// };
