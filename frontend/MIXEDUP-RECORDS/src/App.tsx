import React from "react";
import { Switch, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import LatestUploads from "./pages/LatestUploads"
import LandingPageHeader from "./components/LandingPageHeader";
import FourOFour from "./pages/FourOFour"
import {SearchPage} from "./pages/SearchPage"
import { ModalContainer } from "./pages/ModalContainer";

function App() {
  return( 
    <>
      <LandingPageHeader />
      <Switch>        
        <Route path="/" exact>
          <LatestUploads/>
        </Route>
        <Route>
          <FourOFour/>
        </Route>         
      </Switch>
      <ModalContainer/>
    </>)
}

export default App;
