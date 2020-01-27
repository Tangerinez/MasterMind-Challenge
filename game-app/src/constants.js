// Rules for Mastermind Game
const rules = [
  {
    rule:
      "The Ouija Board will randomly select a pattern of four different numbers from a total of 8 different numbers."
  },
  {
    rule:
      "To prevent the demons from taking over your body, you must guess the correct 4-number combination"
  },
  {
    rule:
      "After one attempt, the Ouija Board will provide some type of information on your attempt. This occurs after each attempt until the round ends."
  },
  {
    rule:
      "You have 10 attempts to prevent the demons from taking over your body. Good luck."
  }
];

const guesses = [
  {
    guess: 1234
  },
  {
    guess: 9235
  },
  {
    guess: 1043
  },
  {
    guess: 9831
  },
  {
    guess: 7684
  },
  {
    guess: 3082
  },
  {
    guess: 5648
  },
  {
    guess: 3549
  },
  {
    guess: 7927
  },
  {
    guess: 1995
  }
];

const inputs = [
  {
    input: "You guessed a correct number",
    guessNumber: 1
  },
  {
    input: "You guessed a correct number and its correct location",
    guessNumber: 2
  },
  {
    input: "Your guess was incorrect",
    guessNumber: 3
  },
  {
    input: "You guessed a correct number",
    guessNumber: 4
  },
  {
    input: "You guessed a correct number and its correct location",
    guessNumber: 5
  },
  {
    input: "Your guess was incorrect",
    guessNumber: 6
  },
  {
    input: "You guessed a correct number and its correct location",
    guessNumber: 7
  },
  {
    input: "You guessed a correct number",
    guessNumber: 8
  },
  {
    input: "Your guess was incorrect",
    guessNumber: 9
  }
];

export { rules, guesses, inputs };
