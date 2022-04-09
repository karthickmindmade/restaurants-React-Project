import React from 'react';
import { useLocation,useHistory } from 'react-router-dom';
import customerimg from '../../../assets/img/costic/customer-5.jpg';
import Breadcrumb from './Breadcrumb';

function Content() {

    const state = useLocation();
    const history = useHistory(); 

    return (
        <div className="ms-content-wrapper">
            <div className="col-md-12">
                <Breadcrumb />
            </div>
            <div className="ms-profile-overview">
                <div className="ms-profile-cover">
                    <div className='profile-img-div'>
                        <img className="ms-profile-img" src={state.state.ProfileImage ? state.state.ProfileImage : customerimg} alt="people" />
                    </div>
                    <div className="ms-profile-user-info">
                        <h4 className="ms-profile-username text-white">{state.state.VendorName}</h4>
                        <h2 className="ms-profile-role">{state.state.Email}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                            {state.state.Description && 
                                <div className="col-xl-7 col-md-12">
                                    <div className="ms-panel ms-panel-fh">
                                       
                                        <div className="ms-panel-body">
                                        <h2 className="section-title">About Vendor</h2>
                                        <p>{state.state.Description}</p>
                                    </div>
                                   
                                    </div>
                                </div>
                                 }   
                                <div className={state.state.Description ? "col-xl-5 col-md-12" : "col align-self-center admin-profile"}>
                                    <div className="ms-panel ms-panel-fh">
                                        <div className="ms-panel-body">
                                            <h2 className="section-title">Basic Information</h2>
                                            <table className="table ms-profile-information">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Vendor Name</th>
                                                        <td>{state.state.VendorName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Phone Number</th>
                                                        <td>{state.state.PhoneNumber}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Email Address</th>
                                                        <td>{state.state.Email}</td>
                                                    </tr>
                                                    {state.state.Address !== undefined ? <tr>
                                                        <th scope="row">Street</th>
                                                        <td>{state.state.Address.Street}</td>
                                                    </tr> : <></>}
                                                    {state.state.Address !== undefined ? <tr>
                                                        <th scope="row">City</th>
                                                        <td>{state.state.Address.City}</td>
                                                    </tr> : <></>}
                                                    {state.state.Address !== undefined ? <tr>
                                                        <th scope="row">District</th>
                                                        <td>{state.state.Address.District}</td>
                                                    </tr> : <></>}
                                                    {state.state.Address !== undefined ? <tr>
                                                        <th scope="row">Pincode</th>
                                                        <td>{state.state.Address.Pincode}</td>
                                                    </tr> : <></>}
                                                </tbody>
                                                <button className="btn btn-secondary float-start" type="submit" onClick={()=>history.push('/admin-vendor-List')} >Close</button>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div >
    );
}
export default Content;