import React, { Component } from "react";
import Project from "../components/Project";
import cards from "../cards.json";
import "./styles.css";


class Portfolio extends Component {
  state = {
    cards,
  };

  render() {
    return (
      <div className="container my-5">
        <div className="d-flex flex-wrap" id="test">
          {this.state.cards.map((card) => (
            <Project
              id={card.id}
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              link1={card.link1}
              link2={card.link2}
              bgcolor={card.bgcolor}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;