import React, { SyntheticEvent, useEffect, useState } from "react";
import { useStore } from "../Hooks/Store";
import { useHistory } from "react-router-dom";
import "../styles/searchPageHeaderStyles.css";
import { TOKEN_CHECK } from "./dbURLS";

export default function SearchPageHeader() {
  const [userName, setUserName] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetch(TOKEN_CHECK, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) history.push("/");
        else return res.json();
      })
      .then((data) => setUserName(data.data.name))
      .catch((Error) => {
        console.error(Error);
      });
  }, []);

  return (
    <header className="headerStyling-Main">
      <div>
        <img
          className="logo"
          src="../../Public/images/Mixedup-logo.png"
          alt="mixed up logo"
        />
        <p className="loggedInUser">Logged in as: </p>
        <p className="loggedInUserName"> {`${userName}`}</p>
      </div>

      <h1 className="strapLine">Mixed Up Reords &gt; Buy . Sell . Vinyl</h1>

      <button
        className="backButton"
        onClick={() => {
          history.push(`/search`);
        }}
      >
        Back to Search
      </button>

      <button
        className="favouriteButton"
        onClick={() => {
          history.push(`/favourites`);
        }}
      >
        Favourites
      </button>
      <button
        className="sellButton"
        onClick={() => {
          history.push(`/sell`);
        }}
      >
        Sell
      </button>

      <button
        className="transactionButton"
        onClick={() => {
          history.push(`/transactions`);
        }}
      >
        My Transactions
      </button>

      <button className="logOutButton">Log Out </button>
    </header>
  );
}
