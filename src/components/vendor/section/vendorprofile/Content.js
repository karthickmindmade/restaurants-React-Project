import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from "react-bootstrap";
import customerimg from '../../../../assets/img/costic/customer-5.jpg'
import Latestpost from './Latestpost';
import Preloader from '../../../layouts/Preloader';
import { useLocation } from 'react-router-dom/esm/react-router-dom';
import EditVendorProfileContent from '../EditVendorProfile/Content';
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from '../../../vendor/section/vendorprofile/Breadcrumb'
import actions from '../../../../redux/Vendor/actions';
function Content() {
    // const state = useLocation()
    // const dispatch = useDispatch()
    // console.log(state.state)
    const [edit, setedit] = useState(false);
    // var vendorDetails
    // if (state.state === undefined) {
    //     vendorDetails = []
    // } else {
    //     vendorDetails = state.state
    // }
    // var vendorDetails = []
    // useEffect(() => {
    //     dispatch({
    //         type: actions.GET_SINGLE_VENDORS, payload: 'karthickraja@mindmade.in'
    //     });
    // }, [dispatch])
    // const vendor = useSelector(
    //     (state) => state.VendorReducer.vendorsDetails
    // );
    // console.log(vendor)
    // vendorDetails = vendor
    const auth = useSelector(
        state => state.authReducer
    );
    return (
        <>
            {auth.token === undefined ?
                <Preloader />
                :
                <>
                    {edit === false ?
                        <div className="ms-content-wrapper">
                            <div className="col-md-12">
                                <Breadcrumb />
                            </div>
                            <div className="ms-profile-overview">
                                <div className="ms-profile-cover">
                                    <img className="ms-profile-img" src={auth.token.result.ProfileImage === undefined ? customerimg : auth.token.result.ProfileImage} alt="people" />
                                    <div className="ms-profile-user-info">
                                        <h4 className="ms-profile-username text-white">{auth.token.result.VendorName}</h4>
                                        <h2 className="ms-profile-role">{auth.token.result.Email}</h2>
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
                                            <p>{auth.token.result.Description}</p>
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
                                                        <td>{auth.token.result.VendorName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Phone Number</th>
                                                        <td>{auth.token.result.PhoneNumber}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Email Address</th>
                                                        <td>{auth.token.result.Email}</td>
                                                    </tr>
                                                    {auth.token.result.Address !== undefined ? <tr>
                                                        <th scope="row">Street</th>
                                                        <td>{auth.token.result.Address.Street}</td>
                                                    </tr> : <></>}
                                                    {auth.token.result.Address !== undefined ? <tr>
                                                        <th scope="row">City</th>
                                                        <td>{auth.token.result.Address.City}</td>
                                                    </tr> : <></>}
                                                    {auth.token.result.Address !== undefined ? <tr>
                                                        <th scope="row">District</th>
                                                        <td>{auth.token.result.Address.District}</td>
                                                    </tr> : <></>}
                                                    {auth.token.result.Address !== undefined ? <tr>
                                                        <th scope="row">Pincode</th>
                                                        <td>{auth.token.result.Address.Pincode}</td>
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
                        <EditVendorProfileContent closeEdit={() => setedit(false)} />
                    }
                </>
            }
        </>
    );
}


export default Content;