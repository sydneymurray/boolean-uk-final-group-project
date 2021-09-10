import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LatestUploads from "./pages/LatestUploads";
import LandingPageHeader from "./components/LandingPageHeader";
import FourOFour from "./pages/FourOFour";
import { SearchPage } from "./pages/SearchPage";
import { ModalContainer } from "./pages/ModalContainer";
import SearchPageHeader from "./components/SearchPageHeader";
import Favourites from "./pages/Favourites";
import Sell from "./pages/SellPage";
import Transactions from "./pages/Transactions";
import {useStore} from "./Hooks/Store"

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPageHeader />
          <LatestUploads />
        </Route>

        <Route path="/search" exact>
          <SearchPageHeader />
          <LatestUploads />
        </Route>

        <Route path="/favourites" exact>
          <SearchPageHeader />
          <Favourites />
        </Route>

        <Route path="/sell" exact>
          <SearchPageHeader />
          <Sell />
        </Route>

        <Route path="/transactions" exact>
          <SearchPageHeader />
          <Transactions />
        </Route>

        <Route>
          <LandingPageHeader />
          <FourOFour />
        </Route>
      </Switch>

      <ModalContainer />
    </>
  );
}

export default App;
