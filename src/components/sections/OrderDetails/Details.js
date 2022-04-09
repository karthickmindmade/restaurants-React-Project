import React from "react";
import Breadcrumb from "./Breadcrumb";
export default function Details({order}){
    console.log(order);
    return(
    <>
        <Breadcrumb />
        <h1>Order details</h1>
        {/* <button onClick={closeDetails}>Close</button> */}
    </>
    )
}