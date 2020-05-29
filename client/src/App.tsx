import React, { Component } from "react";
// @ts-ignore
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// @ts-ignore
import Home from "./components/Home/Home.tsx";
// @ts-ignore
import Navigation from "./components/Navigation/Navigation.tsx";
// @ts-ignore
import Analytics from "./components/Analytics/Analytics.tsx";
// @ts-ignore
import CurrentDonation from "./components/CurrentDonation/CurrentDonation.tsx";
// @ts-ignore
import Error from "./components/Error/Error.tsx";
// @ts-ignore
import Header from "./components/Navigation/Header.tsx";
// @ts-ignore
import Footer from "./components/Footer/Footer.tsx";


import "typeface-roboto";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <div>
              <Header></Header>
              <Navigation />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Current-Donation" component={CurrentDonation} />
                <Route path="/Analytics" component={Analytics} />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
