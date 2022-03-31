import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state)=>state.authReducer);
  console.log("Private route")
  console.log(auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated===true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
