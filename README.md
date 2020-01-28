# MasterMind-Challenge
MasterMind Challenge Game!

# Mastermind Game
This is a game where a player tries to guess the number combinations. At the end of each attempt to guess the 4 number combinations, the computer will provide feedback about the player's guess. A player must guess the right 4-number combination within 10 attempts to win the game.

# Game rules
- At the start of the game the computer will randomly select a pattern of four different numbers from a total of 8 different numbers.
- A player will have 10 attempts to guess the number combinations
- At the end of each guess, computer will provide one of the following response
as feedback:
  - The player had guess a correct number
  - The player had guessed a correct number and its correct location
  - The player’s guess was incorrect
*Note that the computer’s feedback should not reveal which number the player guessed correctly 

# User Interface
Any type of user interface is acceptable (command line, mobile app, web page etc) but the player must have a way of interacting with your game including:
- Ability to guess the combinations of 4 numbers
- Ability to view the history of guesses and their feedback
- The number of guesses remaining is displayed

# Implementation
- Use Random generator API (https://www.random.org/clients/http/api/) to randomly select 4 numbers from 0 ~ 7 (Duplicate numbers are allowed)
- You can choose whichever combination of programming languages, tools, frameworks, and libraries you find appropriate within reason (e.g. you can’t use a game framework that implements Mastermind)

# API Integration
Please use Random Number Generator API to generate the number combinations.
