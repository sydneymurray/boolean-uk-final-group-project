import React from "react";
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";

export default function FavouriteButtonModal() {
  const setModal = useStore((store) => store.setModal);
  return (
    <div className="modal-bg">
      <p className="modal">
        Nice one - Added to favourites - check out your favourites tab 🙏
        <span
          className="modalClose"
          onClick={() => {
            setModal("");
          }}
        >
          ❎
        </span>
      </p>
    </div>
  );
}
