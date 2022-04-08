import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function  Breadcrumb(){
   
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><Link to="#"><i className="material-icons">home</i> Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Vendor Edit</li>
                </ol>
            </nav>
        );
    
}

export default Breadcrumb;