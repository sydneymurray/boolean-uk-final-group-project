import React, { SyntheticEvent } from "react";
import "../styles/landingPageHeaderStyles.css";
import { useStore } from "../Hooks/Store";
import { useHistory } from "react-router-dom";
import { LOGIN_CHECK } from "./dbURLS";

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

    fetch(LOGIN_CHECK, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((res) => {
        if (res.ok) {
          history.push("/search");
        } else setModal("wrongDetails");
      })
      .catch((Error) => {
        console.error(Error);
      });
  }

  return (
    <header className="headerStyling">
      <img
        className="logo"
        src="../../Public/images/Mixedup-logo.png"
        alt="mixed up logo"
      />
      <h1 className="strapLine">
        {" "}
        Mixed Up Records{" "}
        <span>
          {" "}
          <img
            className="vinyl"
            src="../../Public/images/vinyl.png"
            alt="vinyl"
          />
        </span>{" "}
        <span className="buySellVinyl">Buy . Sell . Vinyl</span>
      </h1>
      <div
        className="modalPopUp"
        onClick={() => {
          setModal("newUser");
        }}
      >
        Sign Up
      </div>
      <form className="logInForm" onSubmit={handlesubmit}>
        <label className="logInWithEmail" htmlFor="email">
          Log In with Email:
        </label>
        <input type="email" id="email" name="email" />
        <label className="passwordLogin" htmlFor="pwd">
          Password:
        </label>
        <input type="password" id="pwd" name="pwd" minLength={8} />
        <button className="logInButton">Submit</button>
      </form>
    </header>
  );
}
