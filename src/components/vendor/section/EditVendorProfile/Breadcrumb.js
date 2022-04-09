import React from 'react';
import { Link } from 'react-router-dom';

function  Breadcrumb(props){
   
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><Link to="/vendordashboard"><i className="material-icons">home</i> Home</Link></li>
                    <li className="breadcrumb-item"><Link onClick={props.closeEdit}>Profile</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Profile</li>
                </ol>
            </nav>
        );
    
}

export default Breadcrumb;