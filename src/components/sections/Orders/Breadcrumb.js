import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb(){
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><Link to="#"><i className="material-icons">home</i> Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Orders</li>
                </ol>
            </nav>
        );
    }


