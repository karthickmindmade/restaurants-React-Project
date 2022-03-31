import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state)=>state.authReducer);
  console.log("Public route")
  console.log(auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated===true ? (
            <Redirect to="/dashboard" />
          
        ) : (
            <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
