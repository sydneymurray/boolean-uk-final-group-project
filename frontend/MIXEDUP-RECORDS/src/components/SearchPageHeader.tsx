import React, { SyntheticEvent } from "react";
import { useStore } from "../Hooks/Store";
import { useHistory } from "react-router-dom";
import "../styles/searchPageHeaderStyles.css";

export default function SearchPageHeader() {
  const history = useHistory();
  return (
    <header className="headerStyling">
      <div>logo</div>
      <p>Logged in as Jonathon</p>
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

      <button className="logOutButton">Log Out</button>
    </header>
  );
}
