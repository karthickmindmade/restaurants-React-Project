import React from "react";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from 'react-router-dom/esm/react-router-dom';

export default function Details({order}){
    const state = useLocation()

    console.log(state.state);
    return(
    <>
        <Breadcrumb />
        <h1>Order details</h1>
        
    </>
    )
}