import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({closeDetails}){
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/orders"> Orders</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Order Details</li>
                </ol>
            </nav>
        );
    }


