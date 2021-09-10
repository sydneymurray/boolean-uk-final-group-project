import React from "react";
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";

export default function BuyButtonModal() {
  const setModal = useStore((store) => store.setModal);
  return (
    <div className="modal-bg">
      <p className="modal">
        Sorry there has been an issue and your purchase has not been successful
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
