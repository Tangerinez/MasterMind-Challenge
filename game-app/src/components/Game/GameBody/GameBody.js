import React from "react";
import "./GameBody.scss";
import Board from "./Board/Board";
import Computer from "./Computer/Computer";
import Modal from "./Modal/Modal";
import Hint from "./Hint/Hint";
const RandomOrg = require("random-org");
const random = new RandomOrg({
  apiKey: process.env.REACT_APP_MASTERMIND_API_KEY
});

class GameBody extends React.Component {
  state = {
    computerAnswer: [],
    userGuesses: [], // [[],[],[]]
    digitCount: 0,
    remainingAttempts: 10,
    computerInput: [],
    inputNumber: 0,
    showModal: false,
    hints: 1,
    hintDigit: null,
    modalHeader: "",
    modalButtonText: "Try Again"
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
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
  };

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
      // Checks previous complete answer
      this.checkAnswer(userGuesses[userGuesses.length - 1]);
    }
  };

  checkAnswer = userGuess => {
    let regex = new RegExp(",", "g");
    let strUserGuess = userGuess.toString().replace(regex, "");
    let strComputerGuess = this.state.computerAnswer.join("");
    // console.log(strUserGuess[0], strComputerGuess[0]);
    if (
      parseInt(userGuess.join("")) ===
      parseInt(this.state.computerAnswer.join(""))
    ) {
      this.setState({
        modalHeader: "You Have Defeated The Demons!",
        modalButtonText: "Play Again"
      });
      this.showModal();
    } else {
      if (this.state.remainingAttempts === 1) {
        this.setState({
          modalHeader: `The Correct Answer is ${strComputerGuess}!`,
          modalButtonText: "Try Again"
        });
        this.showModal();
      }
      for (let i = 0; i < strUserGuess.length; i++) {
        // checks for value AND index FIRST
        console.log(strUserGuess, strComputerGuess);
        console.log(strUserGuess[i], strComputerGuess[i]);
        if (strUserGuess[i] === strComputerGuess[i]) {
          return this.handleWrongAnswer(
            "You guessed a correct number and its input!"
          );
        }
      }
      for (let j = 0; j < strUserGuess.length; j++) {
        // checks for ONLY value SECOND
        if (strComputerGuess.includes(strUserGuess[j])) {
          return this.handleWrongAnswer("You guessed a correct number!");
        }
      }
      return this.handleWrongAnswer("Your guess was incorrect!"); // no values guessed correctly
    }
  };

  handleWrongAnswer = input => {
    let computerInput = [...this.state.computerInput];
    computerInput.push(input);
    this.setState({
      remainingAttempts: this.state.remainingAttempts - 1,
      computerInput,
      inputNumber: this.state.inputNumber + 1
    });
  };

  handleHint = () => {
    this.setState({ hintDigit: 1, showModal: true, hints: 0 });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  resetGame = () => {
    this.fetchData();
    this.setState({
      userGuesses: [],
      digitCount: 0,
      remainingAttempts: 10,
      computerInput: [],
      inputNumber: 0,
      showModal: false
    });
  };

  resetHintModal = () => {
    this.setState({ showModal: false });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    console.log("Answer: " + this.state.computerAnswer);
    console.log(
      "Current User Guess: " +
        this.state.userGuesses[this.state.userGuesses.length - 1]
    );
    console.log("Digits in current guess: " + this.state.digitCount);
    console.log("Remaining Attempts: " + this.state.remainingAttempts);
    return (
      <div className="gameBody-wrap">
        <Modal
          showModal={this.state.showModal}
          handleClose={this.resetGame}
          modalButtonText={this.state.modalButtonText}
          modalHeader={this.state.modalHeader}
        >
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <Board
          handleGuess={this.handleGuess}
          remainingAttempts={this.state.remainingAttempts}
        />
        <Computer
          userGuesses={this.state.userGuesses}
          computerInput={this.state.computerInput}
          inputNumber={this.state.inputNumber}
        />
        <Hint
          hints={this.state.hints}
          handleHint={this.handleHint}
          showModal={this.state.showModal}
          hideModal={this.resetHintModal}
        />
      </div>
    );
  }
}

export default GameBody;
