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
- After the 10th guess, if the user has/has not guessed the correct number, then 1 of 2 things will occur:
  1. A losing screen appears with the correct answer, as well as the option to play again
  2. A victory screen appears with the option to play again

*Note that the computer’s feedback should not reveal which number the player guessed correctly 

# Installation and Running the Application
1. To run the application locally on your machine, make sure that you have the latest version of node and npm installed. To install npm or node, first you must install a package manager such as HomeBrew.
    - HomeBrew Installation: ```https://brew.sh/```
     - To install node and npm with HomeBrew, type ```brew install node``` into your terminal and press enter
2. Clone the repository onto your machine.
3. Using an IDE of your choice, open the application and type ```cd game-app``` to go into the game folder.
4. To install necessary dependencies to run the application, type ```npm install``` into the terminal and press enter.
    - For some users, there have been issues with sass not being installed upon installing dependencies. To install sass manually, you can type ```npm install node-sass``` in terminal and press enter.
5. Since the public api keys are in a .env file that is listed in CRA's .gitignore file, you must create a .env file in the ```/src``` folder and *follow this next step*:
    - In the .env file, paste the following code which contains the api key: ```REACT_APP_MASTERMIND_API_KEY = 5b0c9eac-14de-4d87-ba5d-6bbf34b98246```
6. To then run the application in your browser, type ```npm start``` and press enter. The application should then start locally in your browser.

# Technology Used
- I used Random.org's API: (https://www.random.org/clients/http/api/) to randomly select 4 numbers from 1 ~ 8 (Duplicate numbers are allowed)
    - More specifically, I used Random.org's ```random-org``` package on npm, along with 2 registered API keys from Random.org's website, to generate sets of random numbers into my application state.
- For the Frontend, I used React (create-react-app), HTML, and CSS3/SASS (Flexbox) to create the responsive layout for MasterMind

# Extra Dependencies 
- ```node-sass```: Compiling of .scss files to .css files for Node.js 
- ```random-org```: Lightweight wrapper around the Random.org json-rpc api for Node.js used for generating computer's answers
- ```react-router-dom```: Used for client-side routing of MasterMind from landing page to game page
- ```dotenv```: Loads api keys from .env file into process.env, which I then used for my api calls to Random.org




