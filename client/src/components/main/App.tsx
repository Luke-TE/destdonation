import React, { Component } from "react";
// @ts-ignore
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// @ts-ignore
import Home from "../Home/Home.tsx";
// @ts-ignore
import Navigation from "../Navigation/Navigation.tsx";
// @ts-ignore
import Analytics from "../Analytics/Analytics.tsx";
// @ts-ignore
import CurrentDonation from "../CurrentDonation/CurrentDonation.tsx";
// @ts-ignore
import Error from "../Error/Error.tsx";
// @ts-ignore
import Header from "../Navigation/Header.tsx";
// @ts-ignore
import Footer from "../Footer/Footer.tsx";

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
