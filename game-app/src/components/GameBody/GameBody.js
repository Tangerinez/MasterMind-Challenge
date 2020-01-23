import React from "react";
import "./GameBody.scss";
import Board from "./Board/Board";
import Computer from "./Computer/Computer";
var RandomOrg = require("random-org");
var random = new RandomOrg({
  apiKey: process.env.REACT_APP_MASTERMIND_API_KEY
});

class GameBody extends React.Component {
  state = {
    computerAnswer: [],
    userGuesses: []
  };

  componentDidMount() {
    random
      .generateIntegers({
        min: 0,
        max: 7,
        n: 4
      })
      .then(computerAnswer => {
        this.setState({ computerAnswer: computerAnswer.random.data });
        console.log(computerAnswer);
      })
      .catch(error => console.log(error));
  }

  handleGuess = event => {
    let userGuesses = [...this.state.userGuesses];
    userGuesses.push(parseInt(event.target.value));
    this.setState({ userGuesses });
  };

  render() {
    console.log(this.state.computerAnswer);
    console.log(this.state.userGuesses);
    return (
      <div className="gameBody-wrap">
        <Board handleGuess={this.handleGuess} />
        <Computer />
      </div>
    );
  }
}

export default GameBody;
