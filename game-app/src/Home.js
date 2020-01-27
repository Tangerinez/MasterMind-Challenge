import React from "react";
import "./Home.scss";
import Game from "./components/Game/Game";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    username: "",
    errorMessage: "none",
    route: "/"
  };

  handleInput = event => {
    this.setState({ username: event.target.value });
  };

  checkUsername = () => {
    // need to fix this async functionality!
    if (this.state.username === "") {
      this.setState({ route: "/" }, this.errorMessage);
    } else {
      this.setState({ route: "/ouija-board-game" }, this.noErrorMessage);
    }
  }; // checks for is user entered in a username

  errorMessage = () => {
    this.setState({ errorMessage: "block" });
  };

  noErrorMessage = () => {
    this.setState({ errorMessage: "none" });
  };

  render() {
    console.log(this.state.route);
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
                <div
                  className="validation-btn"
                  style={{ display: this.state.errorMessage }}
                >
                  Please enter a username
                </div>
                <Link to={this.state.route} className="enter-link">
                  <button
                    className="enter-game-btn"
                    onClick={this.checkUsername}
                  >
                    Begin Game
                  </button>
                </Link>
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
            {/* <PrivateRoute
              authed={this.state.authed}
              path="/ouija-board-game"
              component={Game}
              username={this.state.username}
              // render={props => (
              //   <Game {...props} username={this.state.username} />
              // )} */}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
