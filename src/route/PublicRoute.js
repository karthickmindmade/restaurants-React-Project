import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  
  const auth = useSelector((state)=>state.authReducer);

  return (
    <Route
      {...rest}
      render={(props) =>
         auth.isAuthenticated ? (
            <Redirect to={auth.route} />
        ) : (
            <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;