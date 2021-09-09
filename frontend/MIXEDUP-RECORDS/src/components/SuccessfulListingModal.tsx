import React from "react";
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  return (
    <div className="modal-bg">
      <p className="modal">
        You have successfully added your listing to our records 
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
