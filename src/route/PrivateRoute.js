import React,{ useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [token,setToken] = useState(null);
  const auth = useSelector((state)=>state.authReducer);

  useEffect(()=>{
    setToken(localStorage.getItem('token')||null)
  },[])

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated || auth.token || token !== null  ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
