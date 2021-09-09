import React, { SyntheticEvent } from "react";
import { useStore } from "../Hooks/Store";
import "../styles/modalStyling.css";
// import RenderApiListing, { ApiListing } from "./RenderApiListing";
import RenderSellListing, { ApiListing } from "./RenderSellListing";
import { NEW_ALBUM, NEW_LISTING, NEW_TRACK } from "./dbURLS";

export default function SellItemModal() {
  const modalData = useStore((store) => store.modalData) as ApiListing;
  const setModal = useStore((store) => store.setModal);
  const searchcriteria = useStore((store) => store.searchcriteria);

  console.log("this is the modal data", modalData);

  function handleSubmit(e: SyntheticEvent) {
    const {
      price: price,
      Condition: condition,
      Format: format,
      notes: notes,
    } = e.target as HTMLFormElement;

    e.preventDefault();

    if (searchcriteria === "album") {
      const albumDetails = {
        artist: modalData.artistName,
        albumname: modalData.albumName,
        coverURL: modalData.coverURL,
      };

      fetch(NEW_ALBUM, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(albumDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          const listingInfo = {
            price: price.value,
            condition: condition.value,
            format: format.value,
            notes: notes.value,
            albumId: data.data.id,
          };

          fetch(NEW_LISTING, {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(listingInfo),
          })
          .then((res) => {
            if (res.ok) {
              setModal("newListing")
            }else setModal("listingFailed")
          })
        });
    } else {
      const trackDetails = {
        artistName: modalData.artistName,
        trackName: modalData.trackName,
        coverURL: modalData.coverURL,
      };

      fetch(NEW_TRACK, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trackDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          const listingInfo = {
            price: price.value,
            condition: condition.value,
            format: format.value,
            notes: notes.value,
            trackId: data.data.id,
          };

          fetch(NEW_LISTING, {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(listingInfo),
          })
            .then((res) => {
              if (res.ok) {
                setModal("newListing")
              }else setModal("listingFailed")
            })
        });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="modal-bg">
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
            <option value="VINYL6">6 inch</option>
            <option value="VINAL7">7 inch</option>
            <option value="VINAL10">10 inch</option>
            <option value="VINAL12">12 inch</option>
            <option value="ALBUM">Album</option>
            <option value="DUBPLATE">Dub Plate</option>
          </select>

          <label htmlFor="price">Price: </label>
          <input className="price" type="text" name="price" required />

          <label htmlFor="notes">Notes: </label>
          <input className="notes" type="text" name="notes" required />

          <button formAction="submit">yes sell this shit man</button>

          <span
            className="modalClose"
            onClick={() => {
              setModal("");
            }}
          >
            ❎
          </span>
        </div>
      </form>
    </>
  );
}
