import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import GameBody from "./components/GameBody/GameBody";

class App extends React.Component {
  state = {
    username: ""
  };

  handleInput = event => {
    this.setState({ username: event.target.value });
  };

  enterGame = () => {}; // checks for is user entered in a username

  render() {
    console.log(this.state.username);
    return (
      <div className="App">
        <div className="section">
          <div className="section-title">Enter If You Dare</div>
          <input
            onInput={this.handleInput}
            className="username-input"
            placeholder="Username"
          />
          <button className="enter-game-btn">Begin Game</button>
          <div className="video-container">
            <video autoPlay loop muted>
              <source src="./landing-page-video.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        {/* <Banner />
      <GameBody /> */}
      </div>
    );
  }
}

export default App;
