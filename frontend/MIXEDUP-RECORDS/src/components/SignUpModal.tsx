import React from "react";
import "../components/modalStyling.css";

export default function ModalPopUp() {
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
        <button>Join</button>
      </div>
    </div>
  );
}
