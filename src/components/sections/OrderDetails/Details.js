import React from "react";
import Breadcrumb from "./Breadcrumb";
export default function Details({closeDetails,singleOrder}){
    console.log(singleOrder);
    return(
    <>
        <Breadcrumb closeDetails={closeDetails}/>
        <h1>Order details</h1>
        <button onClick={closeDetails}>Close</button>
    </>)
}