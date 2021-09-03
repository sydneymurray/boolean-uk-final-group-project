import React from "react";
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  //const setUser = useStore((store) => store.setUser);
  return (
    <div className="modal-bg">
      <div className="modal">
        <h1>Sign up</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <label htmlFor="name">Email: </label>
        <input type="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" />
        <button className="modalJoinButton">Join</button>
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
  );
}
