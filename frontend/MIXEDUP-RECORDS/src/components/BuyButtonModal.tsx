import React from "react";
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";

export default function BuyButtonModal() {
  const setModal = useStore((store) => store.setModal);
  return (
    <div className="modal-bg">
      <p className="modalBuyButton">
        Nice one - good purchase - check out your transactions 🙏
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
