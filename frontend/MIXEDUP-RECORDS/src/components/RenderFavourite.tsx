import React from "react"
import { useStore } from "../Hooks/Store";

type Prop = {
  favourite : Favourite
}

type Favourite = {
  id: number
  user: number
  listing: number
  Listings: listing 
  }

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

type Track = {
  id: number
  artistName: string,
  trackName: string,
  coverURL: string
} 

export default function RenderFavourite({favourite}:Prop){
  const setModal = useStore((store) => store.setModal);
  let favourites = useStore((store) => store.favourites)
  if (!favourites) return <></>
  let deleteFavourite = useStore((store) => store.deleteFavourite)
  let setFavourites = useStore((store) => store.setFavourites)
  let selectedListing = useStore((store) => store.selectedListing)
  let setSelectedListing = useStore((store) => store.setSelectedListing)

  function removeFavourite(id: number){
    if (!favourites) return
    deleteFavourite(id)
    let updatedFavourites = favourites.filter(fav => Number(id) !== Number(fav.id))
    setFavourites(updatedFavourites)
  }

  function displayDetails(){
    setSelectedListing(favourite.Listings)
    setModal("favouriteDetails")
  }
  
  return <>
    <article className="favourite-article" key={favourite.id}>
      <div className="recordImage" onClick={() => displayDetails()}>
        <img className="albumImage"
          src={favourite.Listings.Track?.coverURL} alt={favourite.Listings.Track?.trackName}/>
      </div>
        <div className="recordInfoDb">
        <div className="artistCardTextInfo">Artist: {favourite.Listings.Track?.artistName}</div>
        <div className="artistCardTextInfo">Song: {favourite.Listings.Track?.trackName}</div>       
        <div className="artistCardTextInfo">Condition: {favourite.Listings.condition}</div>
        <div className="artistCardTextInfo">Price: ${favourite.Listings.price}</div>
        <div className="artistCardTextInfo">Notes: {favourite.Listings.notes.slice(0, 25)}</div>
      </div>
      <div className="button-container">
        <button className="remove-favourite"
          onClick={event => removeFavourite(favourite.id)}>
          Remove
        </button>
        <button className="buy-favourite">Buy</button>
      </div>
    </article> 
  </>
}



