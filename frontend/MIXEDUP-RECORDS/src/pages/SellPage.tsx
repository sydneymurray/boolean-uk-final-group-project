import React, { useState } from "react";
import RenderApiListing from "../components/RenderApiListing";

import "../styles/sellPageStyles.css";

export default function Sell() {
  const [search, setSearch] = useState("");
  const [searchcriteria, setSearchcriteria] = useState("artist");
  const [searchResults, setSearchResults] = useState<RawSearchResults>({
    data: null,
    total: null,
    next: null,
  });

  let apiListing = searchResults;
  console.log("searchApiResults", apiListing);

  const handleSelect = (e: any) => {
    console.log(e);
    setSearchcriteria(e.target.value);
  };
  type RawSearchResults = {
    data: SearchResults[] | null;
    total: Number | null;
    next: string | null;
  };

  type SearchResults = {
    artist: { name: string };
    title: string;
    album: { cover_medium: string; title: string };
  };

  // i need to add a if statement in below to catch errors if the info is not in the api

  function getResults() {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://api.deezer.com/search?q=${searchcriteria}:"${search}"`
      )}`
    )
      .then((res) => res.json())
      .then((data) => setSearchResults(JSON.parse(data.contents)))
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  return (
    <>
      <article className="sellSearchBar">
        <h2 className="searchCopy">Search for the record you wanna sell...</h2>

        <label htmlFor="musicOptions">Choose an option: </label>

        <select name="musicOptions" id="musicOptions" onChange={handleSelect}>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="track">Track</option>
        </select>

        <input
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>

        <button onClick={() => getResults()}>SEARCH</button>
      </article>
      <div className="apiResults">
        {apiListing.data
          ? apiListing.data.map((apiListing) => (
              <RenderApiListing
                apiListing={{
                  artistName: apiListing.artist.name,
                  trackName: apiListing.title,
                  albumName: apiListing.album.title,
                  coverURL: apiListing.album.cover_medium,
                }}
              />
            ))
          : null}
      </div>
      <button>Next 25 results</button>
    </>
  );
}
