import React,{ useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const [token,setToken] = useState(null);
  const auth = useSelector((state)=>state.authReducer);

  useEffect(()=>{
    setToken(localStorage.getItem('token')||null)
  },[])

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.token || auth.isAuthenticated || token !== null ? (
            <Redirect to={auth.route} />
          
        ) : (
            <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
