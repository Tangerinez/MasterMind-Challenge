import React from "react";
import "./GameBody.scss";
import Board from "./Board/Board";
import Computer from "./Computer/Computer";
const RandomOrg = require("random-org");
const random = new RandomOrg({
  apiKey: process.env.REACT_APP_MASTERMIND_API_KEY
});

class GameBody extends React.Component {
  state = {
    computerAnswer: [],
    userGuesses: [], // [[],[],[]]
    digitCount: 0,
    remainingAttempts: 10
  };

  componentDidMount() {
    random
      .generateIntegers({
        min: 1,
        max: 8,
        n: 4
      })
      .then(computerAnswer => {
        this.setState({ computerAnswer: computerAnswer.random.data });
        // console.log(computerAnswer);
      })
      .catch(error => console.log(error));
  }

  handleGuess = event => {
    let userGuesses = [...this.state.userGuesses];
    if (this.state.digitCount === 4 || userGuesses.length === 0) {
      // after full guess or no guesses at all
      let newAttempt = [];
      newAttempt.push(parseInt(event.target.value));
      userGuesses.push(newAttempt);
      this.setState({ userGuesses, digitCount: 1 });
    } else {
      userGuesses[userGuesses.length - 1].push(parseInt(event.target.value));
      this.setState({ userGuesses, digitCount: this.state.digitCount + 1 });
    }
    if (userGuesses[userGuesses.length - 1].length === 4) {
      this.checkAnswer(userGuesses[userGuesses.length - 1]);
    }
  };

  checkAnswer = userGuess => {
    if (
      parseInt(userGuess.join("")) ===
      parseInt(this.state.computerAnswer.join(""))
    ) {
      console.log("You won!");
    } else {
      this.decreaseAttempts();
    }
  };

  decreaseAttempts = () => {
    this.setState({ remainingAttempts: this.state.remainingAttempts - 1 });
  };

  resetGuess = () => {};

  render() {
    console.log("Computer Answer: " + this.state.computerAnswer);
    console.log(
      "Current User Guess: " +
        this.state.userGuesses[this.state.userGuesses.length - 1]
    );
    console.log("Digits in current guess: " + this.state.digitCount);
    console.log("Remaining Attempts: " + this.state.remainingAttempts);
    return (
      <div className="gameBody-wrap">
        <Board handleGuess={this.handleGuess} />
        <Computer />
      </div>
    );
  }
}

export default GameBody;
