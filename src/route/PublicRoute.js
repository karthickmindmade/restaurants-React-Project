import React,{ useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  // const jwtToken = JSON.parse(JSON.stringify(localStorage.getItem('token')||null));
  var [token,setToken] = useState(null);
  const auth = useSelector((state)=>state.authReducer);

  useEffect(()=>{
    const jwtToken = localStorage.getItem('token') || null;
    if(jwtToken){
      setToken(jwtToken)
    }else{
      setToken(null)
    } 
  },[]);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.token || auth.isAuthenticated || token !== null  ? (
            <Redirect to={auth.route} />
          
        ) : (
            <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;