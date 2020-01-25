import React from "react";
import "./Home.scss";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
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
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <div className="section">
                <div className="section-title">Enter If You Dare</div>
                <input
                  onInput={this.handleInput}
                  className="username-input"
                  placeholder="Username"
                />
                <button className="enter-game-btn">
                  <Link to="/ouija-board-game" className="enter-link">
                    Begin Game
                  </Link>
                </button>
                <div className="video-container">
                  <video autoPlay loop muted>
                    <source
                      src="./landing-page-video.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
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
      </Router>
    );
  }
}

export default Home;
