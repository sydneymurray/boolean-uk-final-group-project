import React from "react";
import LandingPageHeader from "../components/LandingPageHeader";
import RecordFromDb from "../components/RecordFromDb";
import "../styles/landingPageStyles.css";

export default function LandingPage() {
  return (
    <>
      <LandingPageHeader />
      <div className="recordCardsDb">
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
        <RecordFromDb />
      </div>
    </>
  );
}
