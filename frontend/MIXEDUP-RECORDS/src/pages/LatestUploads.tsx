import React from "react";
import "../styles/LatestUploads.css";
import RenderListing from "../components/RenderListing";
import { useStore } from "../Hooks/Store";

//////
// GENERATE DUMMY DATA ARRAY
type Listing = {
  track: { coverURL: string; trackName: string; artistName: string };
  owner: { name: string };
  condition: string;
  format: string;
  price: number;
  notes: string;
  dateAdded: string;
};

let listing: Listing = {
  track: {
    artistName: "Blondie",
    trackName: "Dreaming",
    coverURL: "https://images.eil.com/large_image/BLONDIE_DREAMING-330467.jpg",
  },
  owner: { name: "Joe Blogs" },
  condition: "Good",
  format: "7 Inch",
  price: 5.49,
  notes: "blah",
  dateAdded: "30 sept 2021",
};

let listings: Listing[] = [];
for (let i = 0; i < 10; i++) listings = [...listings, listing];

export default function LatestUploads() {
  /* This will be the actual code for this screen
  let searchListings = useStore(store => store.searchListings)
  let retrieveListings = useStore(store => store.retrieveListings)
  let listinmgs = useStore(store => store.listings)
  if (!listimgs){
    retrieveListings()
    return
  }
  */

  return (
    <>
      <div className="search-box-container">
        <h1 className="search-box-heading">LATEST UPLOADS FOR SALE</h1>
        <input className="search-box-input" id=""></input>
      </div>
      <div className="results-container">
        {listings.map((listing) => (
          <RenderListing listing={listing} />
        ))}
      </div>
    </>
  );
}

/*
LINE19 onChange={event => searchTracks(event.target.value)}


*/
