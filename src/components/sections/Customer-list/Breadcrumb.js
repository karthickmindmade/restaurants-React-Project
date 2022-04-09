import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb(){
    return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><Link to="#"><i className="material-icons">home</i> Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">Customer</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Customer List</li>
                </ol>
            </nav>
        );
    
}

export default Breadcrumb;