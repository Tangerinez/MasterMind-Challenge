# MasterMind-Challenge
MasterMind Challenge Game!

# Mastermind Game
This is a game where a player tries to guess the number combinations. At the end of each attempt to guess the 4 number combinations, the computer will provide feedback about the player's guess. A player must guess the right 4-number combination within 10 attempts to win the game.

*This game DOES have scary music! If you are afraid of scary music, or do not want to be startled by sudden noises, keep the toggle music button OFF and turn your computer's sound OFF*

# Features
- Horror theme inspired by the popular movie/concept Ouija Board.. 
- Background audio that can be toggled on and off
- Username authentication on landing page
- Routing from landing page to the game page
- The ability to interact with the buttons on the Ouija Board to submit a number
- Current guesses and computer feedback section that keeps track of the user's inputs
- A hint button on the game page that gives a user 1 of 2 possible hints every round specific to that round's answer
- Winning and losing screens (with audio) that allow the user to play the game again

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

*Note that the computer’s feedback should not reveal which number the player guessed correctly. However, for dev purposes, an additional console log is included in the application that reveals what the answer is. This is for testing and demonstration purposes, in case the player wants to test the functionality and validity of this application*

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
      - In the case that this api key does not work, you may replace the api key with ```0192a2e3-62f9-42ec-a956-07905bb4314f```
      - In the event that BOTH keys do not work due to usage limitations, you may replace the api key with your own key, which can be obtained from signing up for free on Random.org's website.
    - By creating this .env folder and pasting the api key into it, the application can now make api calls in the GameBody component in ```src/components/Game/GameBody/GameBody.js```
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

# Extensions Implemented
- Hint Button
    - Each round, the player has 1 hint that can be viewed by clicking on the hint button (bottom right corner). The hint is dynamically generated at the start of each round based off of the response object that is received from making an api call to Random.org. With the way this hint is implemented, there is a 20% chance that the player will get the "good" hint, and an 80% chance that the player will get the "regular" hint. The 2 hints are:
      - 20% Chance: A number that currently exists in the answer and its position
      - 80% Chance: A number that currently doesn't exist in the answer
- Background Audio that can be toggled
    - If the player would like to play/turn off the background audio that is related to the theme of the game, they can click on the music toggle button which is located in the top left portion of both the landing page and the game page. 
    - Upon entering the application, the background audio's default state is paused to account for a better user experience.
    - Winning and Losing screen modals have different audio based off of the game's state
      - Losing Screen Modal has a girl screaming
      - Winning Screen Modal has a crowd cheering
- Username Authentication
    - Built-in username authentication on the landing page in the username input field. The user will not be routed to the game page unless they type in a valid username, which in this case is anything but an empty string. This validation functionality occurs upon clicking the "Enter Game" button on the landing page, which then leads to 2 things happening:
      - Valid Username: Route for the game page is dynamically generated and user is directed to the game page
      - Invalid Username: An error message will appear asking the user to type in a valid username
- Ouija Board Theme
    - Theme was inspired by the popular horror movie Ouija. 
    - Application images, typography, and design was created following the Ouija board theme.
- Dynamic Routing 
    - Dynamic client-side routing from the landing page to the game page
    - Game page route is dynamically generated based off of the player's username input (username authentication)

# Future Implementations & Considerations
- Implementations:
     - Win/loss record for a particular player
     - Password authentication on the landing page
     - Easy, Medium, and Hard game mode that is selectable from the landing page
        - Possibly have like 6 numbers for Easy, 8 for Medium, and 10 for Hard?
     - Timer for specific game modes (Hard mode)
     - Improve hint generator to dynamically generate more hints
- Scalability:
    - State Management: Currently, the ```GamePage``` component is managing over 10 states. This means that information from these states in the form of props is being passed down to multiple child components, sometimes 3-4 layers deep. Although the application is not huge right now, if I wanted to add a lot more features and create more dynamic components, I would need a better way to manage and keep track of state. I'd want to use a state management container such as ```redux``` to manage the mutable data in my application, and ```redux-thunk``` or ```redux-saga``` to handle asynchronous actions.
    - Data Storage: Some of my future implementation ideas involve keep track of a user's wins and losses, high scores table, etc. To handle all of this data regarding user information, for a smaller scale application I would use something like Firebase. For a larger scale application, I would use a database service such as MongoDB, which I could then manage across AWS.
- UI/UX: 
    - If a player refreshes the game from the game page, their user state will be lost and no name will be displayed on the game screen. If I had more time, I would've looked into resetting the state and the route to the landing page state and route on refresh using some mixture of react-router-dom and the History api.
    - To possibly improve the UI and player's user experience, I want to display the rules section in a better way than it is now. One idea that I thought of was possibly moving the rules section to a separate page right after the landing page, and before the game page. Then, on the game page, I could have a button on the Ouija board that when clicked, generates a modal that displays the rules. 
    - I love the Ouija board design. When I have more time in the future, I want to redesign the Ouija board that I initially created to look more like the actual Ouija board from the Ouija movie. One idea I have is to design the Ouija board in Figma, and then create number buttons that will then overlay over the numbers in the actual Ouija Board.
    - For typography, I want to change some sections of font that I have for the game page and buttons. I went with a spooky theme for the fonts, but I feel like I can do better with my choices. Sames goes for the font coloring and contrasts - I believe some of the colors can be better thought out for the theme, and with more time I would refine the typography of the game.
    - The "current guesses" and "computer feedback" section is currently displayed in a column format. Although it's easy to see because I've set a background-color to each attempt's guess and feedback, I believe that maybe having both the current guess and the computer's feedback in one block could possibly be more clear for the user.
    - Theme: Right now, I love the spooky/horror theme that comes from the Ouija Board concept. However, to pull off this scary theme in an application is difficult, and I could definitely do better. With more time, I would design my own images, create my own CSS animations, and look into more audio options to really sell the theme of this application.

