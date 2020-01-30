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
const losingAudio = new Audio("/losing-sound.mp3");
const winningAudio = new Audio("/winning-sound.mp3");

class GameBody extends React.Component {
  state = {
    computerAnswer: [],
    userGuesses: [],
    digitCount: 0,
    remainingAttempts: 10,
    computerInput: [],
    inputNumber: 0,
    showHintModal: false,
    showEndModal: false,
    hints: 1,
    hint: null,
    modalHeader: "",
    modalButtonText: "Try Again"
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    // api call for Random.org's api
    random
      .generateIntegers({
        min: 1,
        max: 8,
        n: 4
      })
      .then(computerAnswer => {
        this.setState({ computerAnswer: computerAnswer.random.data }); // generates computer's answer every round
        this.setHintNumber(computerAnswer.random.data); // generates hint dynamically based off of answer
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
    // compares user's 4 number attempt to the answer
    let regex = new RegExp(",", "g");
    let strUserGuess = userGuess.toString().replace(regex, "");
    let strComputerGuess = this.state.computerAnswer.join("");
    if (
      parseInt(userGuess.join("")) ===
      parseInt(this.state.computerAnswer.join(""))
    ) {
      // if the number's match
      this.setState({
        modalHeader: "You Have Defeated The Demons!",
        modalButtonText: "Play Again"
      });
      this.showEndModal("win");
    } else {
      if (this.state.remainingAttempts === 1) {
        // if it's the player's last turn
        this.setState({
          modalHeader: `You Lose. The Correct Answer is ${strComputerGuess}!`,
          modalButtonText: "Try Again"
        });
        this.showEndModal("lose");
      }
      for (let i = 0; i < strUserGuess.length; i++) {
        // checks for value AND index FIRST
        if (strUserGuess[i] === strComputerGuess[i]) {
          return this.handleWrongAnswer("Correct number and its position!");
        }
      }
      for (let j = 0; j < strUserGuess.length; j++) {
        // checks for ONLY value SECOND
        if (strComputerGuess.includes(strUserGuess[j])) {
          return this.handleWrongAnswer("Correct number!");
        }
      }
      return this.handleWrongAnswer("Incorrect guess."); // no values guessed correctly
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

  setHintNumber = computerAnswer => {
    // generates the hint number for each round
    const hintDecider = Math.random();

    let numberRangeInvalidNumber = [1, 2, 3, 4, 5, 6, 7, 8];
    let uniqueValues = [...new Set(computerAnswer)]; // filters out unique numbers in the answer

    const hint1Index = Math.floor(Math.random() * uniqueValues.length); // generates a random index in the uniqueValues created
    const oneExistingNumber = uniqueValues[hint1Index]; // GOOD HINT: one number that is currently in the answer
    const existingNumberIndex = computerAnswer.indexOf(oneExistingNumber) + 1; // index of a number from the current player's answer

    for (let i = 0; i < uniqueValues.length; i++) {
      numberRangeInvalidNumber.splice(
        numberRangeInvalidNumber.indexOf(uniqueValues[i]),
        1
      ); // remove numbers that exist in the answer
    }
    const hint2Index = Math.ceil(
      // picks index out of the array of numbers that don't exist in the answer
      Math.random() * numberRangeInvalidNumber.length - 1
    );
    const oneInvalidNumber = numberRangeInvalidNumber[hint2Index]; // one number that is not in the answer (regular hint)

    if (hintDecider >= 0.2) {
      // Essentially, there is a 20% chance you get the "good" hint, and 80% chance you get the "regular" hint
      this.setState({ hint: `There is no ${oneInvalidNumber}.` });
    } else {
      this.setState({
        hint: `There is a ${oneExistingNumber} at position ${existingNumberIndex}.`
      });
    }
  };

  handleHint = () => {
    this.setState({ showHintModal: true, hints: 0 });
  };

  showEndModal = winOrLose => {
    // handles end game audio and modal functionality
    if (winOrLose === "lose") {
      losingAudio.play();
    } else {
      winningAudio.play();
    }
    this.setState({ showEndModal: true });
  };

  showHintModal = () => {
    this.setState({ showHintModal: true });
  };

  resetGame = () => {
    // reset game to default state
    this.fetchData();
    this.setState({
      userGuesses: [],
      digitCount: 0,
      remainingAttempts: 10,
      computerInput: [],
      inputNumber: 0,
      showHintModal: false,
      showEndModal: false,
      hints: 1,
      hint: null,
      modalHeader: "",
      modalButtonText: "Try Again"
    });
  };

  resetHintModal = () => {
    this.setState({ showHintModal: false });
  };

  closeModal = () => {
    this.setState({ showEndModal: false, showHintModal: false });
  };

  render() {
    console.log("This round's answer: " + this.state.computerAnswer);
    return (
      <div className="gameBody-wrap">
        <Modal
          showEndModal={this.state.showEndModal}
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
          showHintModal={this.state.showHintModal}
          hideModal={this.resetHintModal}
          hint={this.state.hint}
        />
      </div>
    );
  }
}

export default GameBody;
