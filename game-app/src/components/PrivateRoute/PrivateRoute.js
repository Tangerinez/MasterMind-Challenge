import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Game from "../Game/Game";

function PrivateRoute({ component: Component, username, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} username={username} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
