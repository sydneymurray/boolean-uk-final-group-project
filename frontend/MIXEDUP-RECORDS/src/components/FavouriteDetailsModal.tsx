import React, { SyntheticEvent } from "react";
import registerUser from "./registerUser"
import "../styles/modalStyling.css";
import "../styles/FavouriteDetailsModal.css"
import { useStore } from "../Hooks/Store";

/// NOT COMPLETED


export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  const setSelectedListing = useStore((store) => store.setSelectedListing);
  const selectedListing = useStore((store) => store.selectedListing);
  if (!selectedListing) {setModal("");  return null}

  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>Track Details</h2>
        <div className="recordImage">
        <img className="modalalbumImage" width="400"
          src={selectedListing.Track?.coverURL} alt={selectedListing.Track?.trackName}/>
      </div>
        <div className="recordInfoDb">
        <div className="artistCardTextInfo">Artist: {selectedListing.Track?.artistName}</div>
        <div className="artistCardTextInfo">Song: {selectedListing.Track?.trackName}</div>       
        <div className="artistCardTextInfo">Condition: {selectedListing.condition}</div>
        <div className="artistCardTextInfo">Price: ${selectedListing.price}</div>
        <div className="artistCardTextInfo">Notes: {selectedListing.notes}</div>
      </div>
      <button className="buy-favourite">-  Buy  -</button>

        <span className="modalClose" onClick={() => {setModal("")}}>
          ❎
        </span>
      </div>
    </div>
  );
}


