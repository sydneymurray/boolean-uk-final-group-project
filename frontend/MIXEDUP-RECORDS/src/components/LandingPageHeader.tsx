import React from "react";
import "../components/landingPageHeaderStyles.css";
import { useStore } from "../Hooks/Store";

export default function LandingPageHeader() {
  const setModal = useStore((store) => store.setModal);
  return (
    <header className="headerStyling">
      <div>logo</div>
      <div
        className="modalPopUp"
        onClick={() => {
          setModal("newUser");
        }}
      >
        Sign Up
      </div>
      <form>
        <label htmlFor="email">Log In with Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd" minLength="8" />
        <button className="logInButton">Submit</button>
      </form>
    </header>
  );
}
