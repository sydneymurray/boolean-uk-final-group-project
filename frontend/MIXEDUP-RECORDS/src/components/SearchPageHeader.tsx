import React, { SyntheticEvent, useEffect, useState } from "react";
import { useStore } from "../Hooks/Store";
import { useHistory } from "react-router-dom";
import "../styles/searchPageHeaderStyles.css";
import { TOKEN_CHECK, LOG_OUT } from "./dbURLS";

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

  function logUserOut() {
    history.push("/");
    fetch(LOG_OUT, {
      credentials: "include",
    });
  }

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

      <button
        className="logOutButton"
        onClick={() => {
          logUserOut();
        }}
      >
        Log Out{" "}
      </button>
    </header>
  );
}
