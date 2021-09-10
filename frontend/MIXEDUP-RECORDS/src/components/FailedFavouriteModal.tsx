import React from "react";
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";

export default function FavouriteButtonModal() {
  const setModal = useStore((store) => store.setModal);
  return (
    <div className="modal-bg">
      <p className="modalFail">
        We can't add this listing to your favourites at the moment.  Please try again later 🙏
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
