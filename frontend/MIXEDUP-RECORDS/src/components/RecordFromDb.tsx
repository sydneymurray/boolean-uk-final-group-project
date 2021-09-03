import React from "react";
import "../styles/recordFromDbStyling.css";

export default function RecordFromDb() {
  return (
    <>
      <article className="singlerecordDb-card">
        <div className="recordImage">
          <img
            className="albumImage"
            src="https://imgr.search.brave.com/tNHT7J-9EiIraT4WJAiq6ptlehq1WkZ82wPgRo8LPxE/fit/1080/1077/ce/1/aHR0cHM6Ly9jcHMt/c3RhdGljLnJvdmlj/b3JwLmNvbS8zL0pQ/R18xMDgwL01JMDAw/MC82ODcvTUkwMDAw/Njg3MzAzLmpwZz9w/YXJ0bmVyPWFsbHJv/dmkuY29t"
            alt="Beanie Man Album"
          />
        </div>

        <div className="recordInfoDb">
          <div className="artistCardTextInfo">Artist: Beanie Man</div>
          <div className="artistCardTextInfo">Format: LP</div>
          <div className="artistCardTextInfo">Track: After Dark</div>
          <div className="artistCardTextInfo">Sold By: Syd</div>
          <div className="artistCardTextInfo">Price: $300</div>
        </div>

        <div className="recordCardButtons">
          <button className="recordBuyButtn">Buy</button>
          <button className="recordFavBttn">Add to Favourites</button>
        </div>
      </article>
    </>
  );
}
