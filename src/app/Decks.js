import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as api from "./apiActions";
const FRONTEND_CATEGORY_ID = "recUROLxLzjGsSh8P";

class Decks extends Component {
  state = { category: {}, decks: [] };

  componentWillMount() {
    this.fetchCategory(FRONTEND_CATEGORY_ID);
  }

  fetchCategory = categoryId => {
    api.fetchCategory(categoryId).then(response => {
      this.setState({ category: response }, () => this.fetchDecks(response));
    });
  };

  fetchDecks = category => {
    api.fetchDecks(category).then(response => {
      this.setState({ decks: response });
    });
  };

  render() {
    const { decks } = this.state;

    return (
      <div className="container p-4">
        <div className="mb-5">
          <h1 className="m-0">Flashcards for Frontend Development</h1>
          <p>A curated list of flashcards to boost your professional skills</p>
        </div>
        <div className="row mt-5 pt-5">
          {decks.map((deck, key) => (
            <div className="col-3 d-flex pb-2" style={{ height: "240px" }} key={key}>
              <Link
                to={`/decks/${deck.id}`}
                className="border border-dark rounded text-dark mb-4 p-4 w-100"
                disabled={!deck.cards}
                style={{
                  fontSize: "14px",
                  opacity: deck.cards ? 1 : 0.25,
                }}
              >
                {deck.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Decks;
