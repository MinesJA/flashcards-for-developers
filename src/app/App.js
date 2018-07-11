import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// import Categories from "./Categories";
import Decks from "./Decks";
import Review from "./Review";
import NotFound from "../components/NotFound";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Footer from "../components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App pt-5 d-flex flex-column justify-content-between text-left">
        <HashRouter>
          <div className="app">
            <Route path="/" component={GoogleAnalytics} />
            <Switch>
              <Route exact path="/" component={Decks} />
              <Route exact path="/categories/:categoryId" component={Decks} />
              <Route exact path="/decks" component={Decks} />
              <Route exact path="/decks/:deckId" component={Review} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
