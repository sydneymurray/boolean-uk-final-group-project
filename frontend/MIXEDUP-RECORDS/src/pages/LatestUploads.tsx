import React from "react"
import "../styles/LatestUploads.css"
import RenderTrack from "../components/RenderTrack"
import {useStore} from "../Hooks/Store"

//////
// GENERATE DUMMY DATA ARRAY
type Listing = {
    artistName:string,
    trackName:string,
    owner:string,
    coverURL:string,
    condition:string,
    format:string,
    price:number
  }

let listing:Listing = {
  artistName:"Blondie",
  trackName:"Dreaming",
  owner:"Joe Blogs",
  coverURL:"https://images.eil.com/large_image/BLONDIE_DREAMING-330467.jpg",
  condition:"Good",
  format:"7 Inch",
  price:5.49
}

let listings:Listing[]= []
for (let i=0; i<10; i++)
   listings = [...listings, listing]


export default function LatestUploads(){

  /* This will be the actual code for this screen
  let searchListings = useStore(store => store.searchListings)
  let retrieveListings = useStore(store => store.retrieveListings)
  let listinmgs = useStore(store => store.listings)
  if (!listimgs){
    retrieveListings()
    return
  }
  */

  return <>
    <div className="search-box-container">
      <h1 className="search-box-heading">LATEST UPLOADS FOR SALE</h1>
      <input className="search-box-input" id="" 
      ></input>
    </div>
    <div className="results-container">
      {listings.map(listing=><RenderTrack listing={listing}/>)}
    </div>
  </>
}


/*
LINE19 onChange={event => searchTracks(event.target.value)}


*/
