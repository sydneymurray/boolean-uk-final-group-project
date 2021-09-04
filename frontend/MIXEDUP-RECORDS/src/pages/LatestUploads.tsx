import React from "react"
import "../styles/LatestUploads.css"
import RenderTrack from "../components/RenderTrack"
import {useStore} from "../Hooks/Store"

export default function LatestUploads(){

  let listings = useStore(store=>store.listings)
  let filteredListings = useStore(store=>store.filteredListings)
  let setfilteredListings = useStore(store=> store.setfilteredListings)

  if (!filteredListings) return <></>

  function filterListings(inputText:string){
    if (!listings){
      listings=[]
      return
    }  
    if (inputText===""){
      setfilteredListings(listings)
      return    
    }

    filteredListings=[]
    filteredListings = listings.filter(listing=>{
      // if(listing.artistName.toUpperCase().includes("ERROL")) return 1    
      if(listing.artistName.toUpperCase().includes(inputText.toUpperCase())) return 1  
      if(listing.trackName.toUpperCase().includes(inputText.toUpperCase())) return 1 
      return 0 
    })
    setfilteredListings(filteredListings)
  } 

  return <>
    <div className="search-box-container">
      <h1 className="search-box-heading">LATEST UPLOADS FOR SALE</h1>
      <input className="search-box-input" id="" 
        onChange={event=> filterListings(event.target.value)}></input>
    </div>
    <div className="results-container">
      {filteredListings.map(listing=><RenderTrack listing={listing}/>)}
    </div>
  </>
}

