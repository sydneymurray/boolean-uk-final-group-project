import React, { SyntheticEvent } from "react";
import "../styles/landingPageHeaderStyles.css";
import { useStore } from "../Hooks/Store";
import { useHistory } from "react-router-dom";

export default function LandingPageHeader() {
  const setModal = useStore((store) => store.setModal);
  const history = useHistory();

  function handlesubmit(event: SyntheticEvent) {
    const { email: email, pwd: password } = event.target as HTMLFormElement;

    event.preventDefault();

    const userDetails = {
      email: email.value,
      password: password.value,
    };

    fetch("http://localhost:3100/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }).then((res) => {
      if (res.ok) {
      }
    });
  }

  return (
    <header className="headerStyling">
      <img
        className="logo"
        src="../../Public/images/Mixedup-logo.png"
        alt="mixed up logo"
      />
      <div
        className="modalPopUp"
        onClick={() => {
          setModal("newUser");
        }}
      >
        Sign Up
      </div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">Log In with Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd" minLength={8} />
        <button className="logInButton">Submit</button>
      </form>
    </header>
  );
}
