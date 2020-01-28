import React from "react";
import "./Home.scss";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let audio = new Audio("/landing-page-music.mp3");

class Home extends React.Component {
  state = {
    username: "",
    errorMessage: "none",
    route: "/",
    music: false,
    musicStrikethrough: "block"
  };

  handleInput = event => {
    this.setState(
      { username: event.target.value },
      this.handleUsername(event.target.value)
    );
  };

  handleUsername = input => {
    this.state.username.length === 1 && input === ""
      ? this.setState({ route: "/" })
      : this.setState({ route: "/ouija-board-game" });
  };

  handleError = () => {
    this.state.username !== ""
      ? this.setState({ errorMessage: "none" })
      : this.setState({ errorMessage: "block" });
  };

  toggleMusic = () => {
    if (this.state.music === false) {
      audio.play();
      this.setState({ music: true, musicStrikethrough: "none" });
    } else {
      audio.pause();
      audio.currentTime = 0;
      this.setState({ music: false, musicStrikethrough: "block" });
    }
  };

  render() {
    console.log(this.state.username);
    console.log(this.state.route);
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <div className="section">
                <div className="section-title">Enter If You Dare</div>
                <input
                  value={this.state.username}
                  onChange={this.handleInput}
                  className="username-input"
                  placeholder="Username"
                />
                <div
                  className="validation-btn"
                  style={{ display: this.state.errorMessage }}
                >
                  Please enter a username
                </div>
                <Link to={this.state.route} className="enter-link">
                  <button className="enter-game-btn" onClick={this.handleError}>
                    Begin Game
                  </button>
                </Link>
              </div>
            </Route>
            <Route
              exact
              path="/ouija-board-game"
              render={props => (
                <Game {...props} username={this.state.username} />
              )}
            />
          </Switch>
        </div>
        <button className="music-btn" onClick={this.toggleMusic}>
          <div className="img-container">
            <img
              alt="music-note"
              className="music-note"
              src={require("./images/music-note.png")}
            ></img>
            <div
              className="music-strikethrough"
              style={{ display: this.state.musicStrikethrough }}
            ></div>
          </div>
        </button>
      </Router>
    );
  }
}

export default Home;
