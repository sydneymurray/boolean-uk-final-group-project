import React from "react";
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  return (
    <div className="modal-bg">
      <p className="modal">
        You have not enterered a valid username/Password
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
