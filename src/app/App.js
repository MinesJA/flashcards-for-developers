import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Categories from "./Categories";
import Decks from "./Decks";
import Review from "./Review";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="mt-5">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route exact path="/decks" component={Decks} />
            <Route exact path="/:categoryId" component={Decks} />
            <Route exact path="/decks/:deckId" component={Review} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
