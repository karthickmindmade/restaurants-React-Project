import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from "react-bootstrap";
import customerimg from '../../../../assets/img/costic/customer-5.jpg'
import Latestpost from './Latestpost';
import { useLocation } from 'react-router-dom/esm/react-router-dom';
import EditVendorProfileContent from '../EditVendorProfile/Content';
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from '../../../vendor/section/vendorprofile/Breadcrumb'
import actions from '../../../../redux/Vendor/actions';
function Content() {
    const state = useLocation()
    const dispatch = useDispatch()
    // console.log(state.state)
    const [edit, setedit] = useState(false)
    // var vendorDetails
    // if (state.state === undefined) {
    //     vendorDetails = []
    // } else {
    //     vendorDetails = state.state
    // }
    var vendorDetails = []
    useEffect(() => {
        dispatch({
            type: actions.GET_SINGLE_VENDORS, payload: 'karthickraja@mindmade.in'
        });
    }, [dispatch])
    const vendor = useSelector(
        (state) => state.VendorReducer.vendorsDetails
    );
   

    // const auth = useSelector(
    //     (state) => state.authReducer.token.result
    // );
    // console.log(auth)
    console.log(vendor)
    vendorDetails = vendor
    return (
        <>
            {edit === false ?
                <div className="ms-content-wrapper">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <div className="ms-profile-overview">
                        <div className="ms-profile-cover">
                            <img className="ms-profile-img" src={vendorDetails.ProfileImage === undefined ? customerimg : vendorDetails.ProfileImage} alt="people" />
                            <div className="ms-profile-user-info">
                                <h4 className="ms-profile-username text-white">{vendorDetails.VendorName}</h4>
                                <h2 className="ms-profile-role">{vendorDetails.Email}</h2>
                            </div>
                            <div className="ms-profile-user-buttons">
                                <button className="btn btn-primary" onClick={() => setedit(true)}> <i className="material-icons">person_add</i> Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-body">
                                    <h2 className="section-title">About Me</h2>
                                    <p>{vendorDetails.Description}</p>
                                    {/* <div className="ms-profile-skills">
                                        <h2 className="section-title">Professional Skills</h2>
                                        <ul className="ms-skill-list">
                                            <li className="ms-skill">Web Design</li>
                                            <li className="ms-skill">Development</li>
                                            <li className="ms-skill">Interface Design</li>
                                            <li className="ms-skill">Illustration</li>
                                            <li className="ms-skill">Brand Design</li>
                                            <li className="ms-skill">Adobe</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-body">
                                    {/* <ul className="ms-profile-stats">
                                        <li>
                                            <h3 className="ms-count">5790</h3>
                                            <span>Followers</span>
                                        </li>
                                        <li>
                                            <h3 className="ms-count">4.8</h3>
                                            <span>User Rating</span>
                                        </li>
                                    </ul> */}
                                    <h2 className="section-title">Basic Information</h2>
                                    <table className="table ms-profile-information">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Vendor Name</th>
                                                <td>{vendorDetails.VendorName}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Phone Number</th>
                                                <td>{vendorDetails.PhoneNumber}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Email Address</th>
                                                <td>{vendorDetails.Email}</td>
                                            </tr>
                                            {vendorDetails.Address !== undefined ? <tr>
                                                <th scope="row">Street</th>
                                                <td>{vendorDetails.Address.Street}</td>
                                            </tr> : <></>}
                                            {vendorDetails.Address !== undefined ? <tr>
                                                <th scope="row">City</th>
                                                <td>{vendorDetails.Address.City}</td>
                                            </tr> : <></>}
                                            {vendorDetails.Address !== undefined ? <tr>
                                                <th scope="row">District</th>
                                                <td>{vendorDetails.Address.District}</td>
                                            </tr> : <></>}
                                            {vendorDetails.Address !== undefined ? <tr>
                                                <th scope="row">Pincode</th>
                                                <td>{vendorDetails.Address.Pincode}</td>
                                            </tr> : <></>}
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
                :
                <EditVendorProfileContent vendorDetails={vendorDetails} closeEdit={() => setedit(false)} />
            }
        </>

    );
}


export default Content;