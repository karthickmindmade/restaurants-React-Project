import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from "react-bootstrap";
import { useLocation } from 'react-router-dom/esm/react-router-dom';
import customerimg from '../../../assets/img/costic/customer-5.jpg'
import Latestpost from './Latestpost';

function Content() {
    const state = useLocation()
    console.log(state.state)
    var vendor
    if (state.state === undefined) {
        vendor = []
    } else {
        vendor = state.state
    }
    return (
        <div className="ms-content-wrapper">
            <div className="ms-profile-overview">
                <div className="ms-profile-cover">
                    <img className="ms-profile-img" src={vendor.ProfileImage===undefined? customerimg:vendor.ProfileImage} alt="people" />
                    <div className="ms-profile-user-info">
                        <h4 className="ms-profile-username text-white">Chihoo Hwang</h4>
                        <h2 className="ms-profile-role">Professional Cheff</h2>
                    </div>
                    <div className="ms-profile-user-buttons">
                        <button  className="btn btn-primary"> <i className="material-icons">person_add</i> Edit</button>
                        
                    </div>
                </div>
               
            </div>
            <div className="row">
                <div className="col-xl-7 col-md-12">
                    <div className="ms-panel ms-panel-fh">
                        <div className="ms-panel-body">
                            <h2 className="section-title">About Me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                            </p>
                            <div className="ms-profile-skills">
                                <h2 className="section-title">Professional Skills</h2>
                                <ul className="ms-skill-list">
                                    <li className="ms-skill">Web Design</li>
                                    <li className="ms-skill">Development</li>
                                    <li className="ms-skill">Interface Design</li>
                                    <li className="ms-skill">Illustration</li>
                                    <li className="ms-skill">Brand Design</li>
                                    <li className="ms-skill">Adobe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-md-12">
                    <div className="ms-panel ms-panel-fh">
                        <div className="ms-panel-body">
                            <ul className="ms-profile-stats">
                                <li>
                                    <h3 className="ms-count">5790</h3>
                                    <span>Followers</span>
                                </li>
                                <li>
                                    <h3 className="ms-count">4.8</h3>
                                    <span>User Rating</span>
                                </li>
                            </ul>
                            <h2 className="section-title">Basic Information</h2>
                            <table className="table ms-profile-information">
                                <tbody>
                                    <tr>
                                        <th scope="row">Full Name</th>
                                        <td>Chihoo Hwang</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Birthday</th>
                                        <td>January 25th, 1996</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Language</th>
                                        <td>English (US)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Website</th>
                                        <td>www.example.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone Number</th>
                                        <td>+123 456 789</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email Address</th>
                                        <td>example@mail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Location</th>
                                        <td>New York, USA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <Latestpost />
                </div>
            </div>
        </div >

    );
}


export default Content;