# MasterMind-Challenge
MasterMind Challenge Game!

# Mastermind Game
This is a game where a player tries to guess the number combinations. At the end of each attempt to guess the 4 number combinations, the computer will provide feedback about the player's guess. A player must guess the right 4-number combination within 10 attempts to win the game.

# Features
- Horror theme that uses the concept of the Ouija Board for the game.
- Background audio that can be toggled on and off
- Username authentication on landing page
- Routing from landing page to the game page
- The ability to interact with the buttons on the Ouija Board to submit a number
- Current guesses and computer feedback section that keeps track of the user's inputs
- A hint button on the game page that gives a user 1 hint every round specific to that round's answer
- Winning and losing screens that allow the user to play the game again

# Game rules
- At the start of the game the computer will randomly select a pattern of four different numbers from a total of 8 different numbers.
- The player will have 10 attempts to guess the number combinations
- At the end of each guess, computer will provide one of the following response
as feedback:
  - The player had guess a correct number
  - The player had guessed a correct number and its correct location
  - The player’s guess was incorrect
- Each round, the player can also click on the hint button to receive 1 hint. This hint can be viewed any time during the round.

*Note that the computer’s feedback should not reveal which number the player guessed correctly 

# Installation
1. To run the application locally on your machine, make sure that you have the latest version of node and npm installed. To install npm or node, first you must install a package manager such as HomeBrew.
  - HomeBrew Installation: ```https://brew.sh/```
    - To install node and npm with HomeBrew, type ```brew install node``` into your terminal

# Implementation
- Use Random generator API (https://www.random.org/clients/http/api/) to randomly select 4 numbers from 0 ~ 7 (Duplicate numbers are allowed)
- You can choose whichever combination of programming languages, tools, frameworks, and libraries you find appropriate within reason (e.g. you can’t use a game framework that implements Mastermind)

# API Integration
Please use Random Number Generator API to generate the number combinations.
