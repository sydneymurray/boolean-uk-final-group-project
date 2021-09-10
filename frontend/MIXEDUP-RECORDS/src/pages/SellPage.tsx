import React, { useState } from "react";
import RenderApiListing from "../components/RenderApiListing";
import { useStore } from "../Hooks/Store";
import RenderAlbumApiListing from "../components/RenderAlbumApiListing"

import "../styles/sellPageStyles.css";

export default function Sell() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<RawSearchResults>();
  // "Search above for results"
  const [albumResults, setAlbumResults] = useState<AlbumResults[]>([])
  const searchcriteria = useStore((store) => store.searchcriteria);
  const setSearchcriteria = useStore((store) => store.setSearchcriteria);
  let apiListing = searchResults;

  const handleSelect = (e: any) => {
    setSearchcriteria(e.target.value);
    setAlbumResults([])
  };
  type RawSearchResults =
    | {
        albumData: AlbumResults[] | null;
        data: SearchResults[] | null;
        total: Number | null;
        next: string | null;
      }
    | string;

  type SearchResults = {
    artist: { name: string };
    title: string;
    album: { cover_medium: string; title: string };
  };

  type AlbumResults = {
    artistName: string;
    cover: string;
    cover_big: string;
    cover_medium: string;
    cover_small: string;
    cover_xl: string;
    title: string;
    tracklist: string;
  };

  // i need to add a if statement in below to catch errors if the info is not in the api

  function getResults() {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://api.deezer.com/search?q=${searchcriteria}:"${search}"`
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchResults = JSON.parse(data.contents);
        fetchResults.albumData = [];
        for (const item of fetchResults.data) {
          const albumObject = {
            ...item.album,
            artistName: item.artist.name,
          };
          const albumTitleArray = fetchResults.albumData.map(
            (albumObject: { title: string }) => albumObject.title
          );
          if (!albumTitleArray.includes(item.album.title)) {
            fetchResults.albumData = [...fetchResults.albumData, albumObject];
          }
        }

        if (fetchResults.total) {
          setSearchResults(fetchResults)
          setAlbumResults(fetchResults.albumData)
        } else {
          setSearchResults("Can't find what you looking for")
        }
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }


  function getNextResults() {
    if (typeof apiListing === "object" && apiListing.next) {
      fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          apiListing.next
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          const fetchResults = JSON.parse(data.contents);
          fetchResults.albumData = [...albumResults];
          for (const item of fetchResults.data) {
            const albumObject = {
              ...item.album,
              artistName: item.artist.name,
            };
            const storedTitleArray = fetchResults.albumData.map((albumObject: { title: string }) => albumObject.title)
            if (!storedTitleArray.includes(albumObject.title)) {
              fetchResults.albumData = [...fetchResults.albumData, albumObject]
            }
          }
  
          if (fetchResults.total) {
            setSearchResults(fetchResults)
            setAlbumResults(fetchResults.albumData)
          } else {
            setSearchResults("Can't find what you looking for")
          }
        })
        .catch((error) => console.error("FETCH ERROR:", error));
    } else {
      return "No more results";
    }
  }

  return searchcriteria === "album" ? (
    <>
      <article className="searchSellBar">
        <h2 className="searchCopy">Search for the record you wanna sell...</h2>

        {/* <label htmlFor="musicOptions">Choose an option: </label> */}

        <select
          className="searchInput"
          name="musicOptions"
          id="musicOptions"
          onChange={handleSelect}
        >
          <option className="searchInput" value="artist">
            Artist
          </option>
          <option className="searchInput" value="album">
            Album
          </option>
          <option className="searchInput" value="track">
            Track
          </option>
        </select>

        <input
          className="searchBar"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>

        <button onClick={() => getResults()}>SEARCH</button>
      </article>
      <div className="apiResults">
        {albumResults.length ? (
          albumResults.map(
            (result: {
              artistName: string,
              title: string,
              cover_medium: string
            }) => (
              <RenderAlbumApiListing
                apiListing={{
                  artistName: result.artistName,
                  albumName: result.title,
                  coverURL: result.cover_medium,
                }}
              />
            )
          )
        ) : (
          <h1>It seems we couldn't find any matches???</h1>
        )}
      </div>
      <button onClick={() => getNextResults()}>Click here to load more albums</button>
    </>
  ) : (
    <>
      <article className="searchSellBar">
        <h2 className="searchCopy">Search for the record you wanna sell...</h2>

        {/* <label htmlFor="musicOptions">Choose an option: </label> */}

        <select
          className="searchInput"
          name="musicOptions"
          id="musicOptions"
          onChange={handleSelect}
        >
          <option className="searchInput" value="artist">
            Artist
          </option>
          <option className="searchInput" value="album">
            Album
          </option>
          <option className="searchInput" value="track">
            Track
          </option>
        </select>

        <input
          className="searchBar"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>

        <button onClick={() => getResults()}>SEARCH</button>
        
      </article>
      <div className="apiResults">
        {typeof apiListing === "object" && apiListing.data ? (
          apiListing.data.map(
            (apiListing: {
              artist: { name: any };
              title: any;
              album: { title: any; cover_medium: any };
            }) => (
              <RenderApiListing
                apiListing={{
                  artistName: apiListing.artist.name,
                  trackName: apiListing.title,
                  albumName: apiListing.album.title,
                  coverURL: apiListing.album.cover_medium,
                }}
              />
            )
          )
        ) : (
          <h1>{searchResults}</h1>
        )}
      </div>
      <button className="nextResults" onClick={() => getNextResults()}>
        Next 25 results
      </button>
    </>
  );
}
