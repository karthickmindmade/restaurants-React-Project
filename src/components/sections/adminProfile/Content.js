import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from "react-bootstrap";
import { useLocation } from 'react-router-dom/esm/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/Vendor/actions';
import customerimg from '../../../assets/img/costic/customer-5.jpg'
import Latestpost from './Latestpost';
import AdminEditProfileContent from "../AdminEditProfile/content";
import Breadcrumb from './Breadcrumb';
import Preloader from '../../layouts/Preloader';

function Content() {
    const state = useLocation()
    const dispatch = useDispatch()
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
    //         type: actions.GET_SINGLE_VENDORS, payload: state.state.Email
    //     });
    // },[dispatch])
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
            {auth.token === undefined ? <Preloader /> :
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
                                        <h4 className="ms-profile-username text-white">{auth.token.result.AdminName}</h4>
                                        <h2 className="ms-profile-role">{auth.token.result.Email}</h2>
                                    </div>
                                    <div className="ms-profile-user-buttons">
                                        <button className="btn btn-primary" onClick={() => setedit(true)}> <i className="material-icons">person_add</i> Edit</button>
                                    </div>
                                </div>
                            </div>
                                    <div className="ms-panel ms-panel-fh admin-profile">
                                        <div className="ms-panel-body">
                                            <h2 className="section-title">Basic Information</h2>
                                            <table className="table ms-profile-information">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Admin Name</th>
                                                        <td>{auth.token.result.AdminName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Email Address</th>
                                                        <td>{auth.token.result.Email}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Password</th>
                                                        <td>{auth.token.result.Password}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                               
                            
                        </div >
                        :
                        <AdminEditProfileContent closeEdit={() => setedit(false)} />
                    }
                </>
            }
        </>
    );
}


export default Content;