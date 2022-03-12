import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import Footer from "./components/footer";
import { Imperrsium } from "./components/map/impersium";
import MapPage from "./components/map/mapPage";
import NavBar from "./components/navbar";
import { PagePaymentSucessfull } from "./components/SuccessPage";
import CheckoutPage from "./pages/checkoutPage";
import ContactPage from "./pages/contactPage";
import Home from "./pages/home";
import { Legal } from "./pages/legal";
import { OurFleet } from "./pages/ourFleet";
import { OurTeam } from "./pages/ourTeam";
import PrivacyPolicy from "./pages/privacy";
import TrackPage from "./pages/track";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/book-trip" exact>
        <MapPage />
      </Route>
      <Route path="/track" exact>
        <TrackPage />
      </Route>
      <Route path="/impressum" exact>
        <Imperrsium />
      </Route>
      <Route path="/checkout" exact>
        <CheckoutPage />
      </Route>
      <Route path="/privacy" exact>
        <PrivacyPolicy />
      </Route>
      <Route path="/team" exact>
        <OurTeam />
      </Route>
      <Route path="/fleet" exact>
        <OurFleet />
      </Route>
      <Route path="/success" exact>
        <PagePaymentSucessfull />
      </Route>
      <Route path="/agbs-/-datenschutzerklärung" exact>
        <Legal />
      </Route>

      {/* <Route path="*">Not found</Route> */}
      <Footer />
    </div>
  );
}

export default App;
