import React, { SyntheticEvent } from "react";
import { useStore } from "../Hooks/Store";
import { useHistory } from "react-router-dom";
import "../styles/searchPageHeaderStyles.css";

export default function SearchPageHeader() {
  return (
    <header className="headerStyling">
      <div>logo</div>
      <p>Logged in as Jonathon</p>
      <button className="favouriteButton">Favourites</button>
      <button className="sellButton">Sell</button>
      <button className="logOutButton">Log Out</button>
    </header>
  );
}
