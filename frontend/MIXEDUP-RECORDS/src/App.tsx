import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LatestUploads from "./pages/LatestUploads";
import LandingPageHeader from "./components/LandingPageHeader";
import FourOFour from "./pages/FourOFour";
import { SearchPage } from "./pages/SearchPage";
import { ModalContainer } from "./pages/ModalContainer";
import SearchPageHeader from "./components/SearchPageHeader";

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
