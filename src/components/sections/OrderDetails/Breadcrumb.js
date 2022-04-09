import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({closeDetails}){
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                    <li className="breadcrumb-item"><Link onClick={closeDetails}> Orders</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">OrderDetails</li>
                </ol>
            </nav>
        );
    }


