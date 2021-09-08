import React from "react";
import { useStore } from "../Hooks/Store";
import "../styles/modalStyling.css";
// import RenderApiListing, { ApiListing } from "./RenderApiListing";
import RenderSellListing, { ApiListing } from "./RenderSellListing";

export default function SellItemModal() {
  const modalData = useStore((store) => store.modalData) as ApiListing;
  const setModal = useStore((store) => store.setModal);
  return (
    <>
      <div className="modal-bg">
        <div className="modalSell">
          <RenderSellListing apiListing={modalData} />

          <label htmlFor="Condition">Condition: </label>
          <select name="Condition" id="Condition">
            <option value="V.Good">V.Good</option>
            <option value="Good">Good</option>
            <option value="Medium">Medium</option>
            <option value="Poor">Poor</option>
          </select>

          <label htmlFor="Format">Format: </label>
          <select name="Format" id="Format">
            <option value="MP3">MP3</option>
            <option value="7 inch">6 inch</option>
            <option value="10 inch">7 inch</option>
            <option value="12 inch">10 inch</option>
            <option value="12 inch">12 inch</option>
            <option value="ALbum">Album</option>
            <option value="Dub Plate">Dub Plate</option>
          </select>

          <label htmlFor="price">Price: </label>
          <input className="price" type="text" name="price" required />

          <label htmlFor="notes">Notes: </label>
          <input className="notes" type="text" name="notes" required />

          <button>yes sell this shit man</button>
          <span
            className="modalClose"
            onClick={() => {
              setModal("");
            }}
          >
            ❎
          </span>
        </div>
      </div>
    </>
  );
}
