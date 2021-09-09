import React, {useEffect} from "react";
import "../styles/Favourites.css";
import RenderFavourite from "../components/RenderFavourite";
import { useStore } from "../Hooks/Store";

export default function Favourites() {
  let favourites = useStore((store) => store.favourites);
//  if (!favourites) return <></>

  return <>
    <h1 className="favourites-heading">My Favourites</h1>
    <div className="favourites-container">
        {favourites?favourites.map((favourite) => (
          <RenderFavourite favourite={favourite} />
        )): null}
    </div>
      
  </>
}
