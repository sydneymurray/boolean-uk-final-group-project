import React from "react";
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  return (
    <div className="modal-bg">
      <p className="modalSuccess">
        You have successfully added your listing to our records ✌️ <br />
        <span className="modalSpanCopy">
          {" "}
          (if you click back to search you'll see it there)
        </span>
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
