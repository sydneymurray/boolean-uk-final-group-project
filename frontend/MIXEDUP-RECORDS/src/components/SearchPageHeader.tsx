import React, { SyntheticEvent, useEffect, useState } from "react";
import { useStore } from "../Hooks/Store";
import { useHistory } from "react-router-dom";
import "../styles/searchPageHeaderStyles.css";

export default function SearchPageHeader() {
  const [userName, setUserName] = useState("")

  const history = useHistory();

  useEffect( () => {
    fetch("http://localhost:3100/users/current", {
      credentials: "include"
    })
    .then(res=>res.json())
    .then(data=>setUserName(data.data.name))
    .catch((Error)=>{
      console.error(Error);
    }) 
  }, [])

  return (
    <header className="headerStyling">
      <img
        className="logo"
        src="../../Public/images/Mixedup-logo.png"
        alt="mixed up logo"
      />
      <p>{`Logged in as ${userName}`}</p>
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
