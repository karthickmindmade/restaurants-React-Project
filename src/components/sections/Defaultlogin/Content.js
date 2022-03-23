import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
// import { firebase, auth } from './../firebase';

import { firebase, auth } from '../../../firebase';
export default function Content() {
    const [show1, setshow1] = useState()
    const router = useHistory()
    //initialize datatable
    function formValidation() {
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                        console.log("validationCustom08")
                    }
                    form.classList.add('was-validated');

                }, false);
            });

        }, false);
    }
    formValidation();


    function handleShow1() {
        setshow1(true);
    }
    function handleClose() {
        setshow1(false);
    }
    // const FROM_NUMBER = '+18037705278';
    // const TO_NUMBER = '9750877583';
    // const TWILIO_AUTH_TOKEN = '0c7f74f4ca14820764a8ef8eb67b3ab8';
    // const TWILIO_ACCOUNT_SID = 'AC22863bbf6e02379e0ff900cd9bb1ea9f';

    // const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);
    // const sendMail =()=> {
    //     client.messages
    //         .create({
    //             body: 'message hii Karthick',
    //             from: FROM_NUMBER,
    //             to: TO_NUMBER
    //         })
    //         .then(message => {
    //             console.log(message);
    //         }).catch((error) => {
    //             console.log(error)
    //         });
    // }

    // const client = require('twilio')(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN);
    // const sendMail=()=> {
    //     client.messages
    //         .create({
    //             body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    //             from: '+18037705278',
    //             to: '9750877583',
    //         })
    //         // .then(message => console.log(message.sid));
    // }
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    // Sent OTP
    const signin = () => {

        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            router.push("/Dashboard")
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div className="ms-content-wrapper ms-auth">
            <div className="ms-auth-container">
                <div className="ms-auth-col">
                    <div className="ms-auth-bg" />
                </div>
                <div className="ms-auth-col">
                    <div className="ms-auth-form">

                        <div className={!show ? "display-block needs-validation" : "display-none needs-validation"} noValidate>
                            <h3>Login to Account</h3>
                            <p>Please enter your PhoneNumber to continue</p>
                            <div className="mb-2">
                                <label htmlFor="validationCustom09">PhoneNumber</label>
                                <div className="input-group">
                                    <input type="phone" className="form-control" id="validationCustom09" value={mynumber} onChange={(e)=>{setnumber(e.target.value)}} placeholder="phone number" required />
                                    <div className="invalid-feedback">Please provide a PhoneNumber.</div>
                                </div>
                            </div>
                            <div id="recaptcha-container"></div>
                            <button className="btn btn-primary mt-4 d-block w-100" type="submit" onClick={signin}>Send OTP</button>
                        </div>
                        <div className={show ? "display-block needs-validation" : "display-none needs-validation"} noValidate>
                            <h3>Login to Account</h3>
                            <p>Please enter your OTP to continue</p>
                            <div className="mb-2">
                                <label htmlFor="validationCustom09">OTP</label>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder={"Enter your OTP"} onChange={(e) => { setotp(e.target.value) }} id="validationCustom09"  required />
                                    <div className="invalid-feedback">Please provide a OTP</div>
                                </div>
                            </div>
                            <div id="recaptcha-container"></div>
                            <button className="btn btn-primary mt-4 d-block w-100" type="submit" onClick={ValidateOtp}>Verify</button>
                        </div>
                        {/* <div style={{ "marginTop": "200px" }}>
                            <center>
                                <div style={{ display: !show ? "block" : "none" }}>
                                    <input value={mynumber} onChange={(e) => {
                                        setnumber(e.target.value)
                                    }}
                                        placeholder="phone number" />
                                    <br /><br />
                                    <div id="recaptcha-container"></div>
                                    <button onClick={signin}>Send OTP</button>
                                </div>
                                <div style={{ display: show ? "block" : "none" }}>
                                    <input type="text" placeholder={"Enter your OTP"}
                                        onChange={(e) => { setotp(e.target.value) }}></input>
                                    <br /><br />
                                    <button onClick={ValidateOtp}>Verify</button>
                                </div>
                            </center>
                        </div> */}
                        {/* <form className="needs-validation" noValidate>
                            <h3>Login to Account</h3>
                            <p>Please enter your email and password to continue</p>
                            <div className="mb-3">
                                <label htmlFor="validationCustom08">Email Address</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="validationCustom08" placeholder="Email Address" required />
                                    <div className="invalid-feedback">Please provide a valid email.</div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="validationCustom09">Password</label>
                                <div className="input-group">
                                    <input type="password" className="form-control" id="validationCustom09" placeholder="Password" required />
                                    <div className="invalid-feedback">Please provide a password.</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="ms-checkbox-wrap">
                                    <input className="form-check-input" type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                </label> <span> Remember Password </span>
                                <label className="d-block mt-3"><Link className="btn-link" onClick={handleShow1}>Forgot Password?</Link>
                                </label>
                            </div>
                            <button className="btn btn-primary mt-4 d-block w-100" type="submit">Sign In</button>
                            <p className="mb-0 mt-3 text-center">Don't have an account? <Link className="btn-link" to="/default-register">Create Account</Link>
                            </p>
                            <Link className="btn-link" to="/Dashboard">Go to Dashboard</Link>
                          
                        </form> */}
                    </div>
                </div>
            </div>
            <Modal className="modal-min" show={show1} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body className="text-center">
                    <button type="button" className="close" onClick={handleClose}><span aria-hidden="true">×</span></button>
                    <i className="flaticon-secure-shield d-block" />
                    <h1>Forgot Password?</h1>
                    <p>Enter your email to recover your password</p>
                    <form method="post">
                        <div className="ms-form-group has-icon">
                            <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" /> <i class="material-icons">email</i>
                        </div>
                        <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
                    </form>
                </Modal.Body>
            </Modal>

        </div>

    );
}


