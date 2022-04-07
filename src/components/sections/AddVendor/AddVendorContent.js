import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from "react-bootstrap";
import customerimg from '../../../assets/img/costic/customer-5.jpg'
import actions from '../../../redux/Vendor/actions';
import Breadcrumb from './Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
function AddVendorContent() {
    const dispatch = useDispatch();
    const Email = useRef();
    const Password = useRef();
    const VendorName = useRef();
    const Street = useRef()
    const City = useRef()
    const District = useRef()
    const Pincode = useRef()
    const PhoneNumber = useRef()
    function AddVendor() {
        const data = {
            "Email": Email.current.value,
            "Password": Password.current.value,
            "VendorName": VendorName.current.value,
            "Street": Street.current.value,
            "City": City.current.value,
            "District": District.current.value,
            "Pincode": Pincode.current.value,
            "PhoneNumber": PhoneNumber.current.value,
        }
        dispatch({
            type: actions.ADD_VENDORS, payload: data
        });
    }
    const CakesList = useSelector(
        (state) => state.VendorReducer
    );
    console.log(CakesList.addVendorStatus)
    return (
        <div className="ms-content-wrapper">
            <div className="col-md-12">
                <Breadcrumb />
            </div>
            <div className="row">
                <div className="col-xl-5 col-md-12">
                    <div class="ms-panel ms-panel-fh">
                        <div class="ms-panel-header"><h6>Add Vendor Form</h6></div>
                        <div class="ms-panel-body">
                            <form class="needs-validation clearfix" novalidate="">
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Email</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" ref={Email} placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Password</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" ref={Password} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">VendorName</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" ref={VendorName} placeholder="VendorName" />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-md-12">
                    <div className="ms-panel ms-panel-fh">
                        <div class="ms-panel-header">
                            <h6>Add Address </h6>
                        </div>
                        <div className="ms-panel-body">
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom25">Street</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={Street} placeholder="Street" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>City</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={City} placeholder="City" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom24">District</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={District} placeholder="District" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Pincode</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={Pincode} placeholder="Pincode" />
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="validationCustom18">PhoneNumber</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={PhoneNumber} placeholder="PhoneNumber" />
                                    </div>
                                </div>
                                <button class="btn btn-secondary float-right mr-4" type="submit" onClick={AddVendor} >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default AddVendorContent;