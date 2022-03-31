import React, {useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import actions from "../../../redux/Auth/actions";

export default function Content() {
    const [show1, setshow1] = useState()
    const dispatch=useDispatch();
    const router = useHistory();
    const Email=useRef();
    const Password=useRef();

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
    const SignIn=(e)=>{
        e.preventDefault();
        console.log("Email");
        console.log(Email.current.value);
        console.log("Password");
        console.log(Password.current.value);
        dispatch({ type: actions.LOG_IN, payload: {Email: Email.current.value, Password: Password.current.value} } );
        Email.current.value="";
        Password.current.value="";
    }
    
    return (
        <div className="ms-content-wrapper ms-auth">
            <div className="ms-auth-container">
                <div className="ms-auth-col">
                    <div className="ms-auth-bg" />
                </div>
                <div className="ms-auth-col">
                        <div className="ms-auth-form">
                            <form className="needs-validation" noValidate>
                                <h3>Login to Account</h3>
                                <p>Please enter your email and password to continue</p>
                                <div className="mb-3">
                                    <label htmlFor="validationCustom08">Email Address</label>
                                    <div className="input-group">
                                        <input type="email" className="form-control" ref={Email} id="validationCustom08" placeholder="Email Address" required />
                                        <div className="invalid-feedback">Please provide a valid email.</div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="validationCustom09">Password</label>
                                    <div className="input-group">
                                        <input type="password" className="form-control" ref={Password} id="validationCustom09" placeholder="Password" required />
                                        <div className="invalid-feedback">Please provide a password.</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="ms-checkbox-wrap">
                                        <input className="form-check-input" type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                    </label> <span> Remember Password </span>
                                    <label className="d-block mt-3"><Link  className="btn-link" onClick={handleShow1}>Forgot Password?</Link>
                                    </label>
                                </div>
                                <button className="btn btn-primary mt-4 d-block w-100" type="submit"onClick={SignIn}>Sign In</button>
                                <p className="mb-0 mt-3 text-center">Don't have an account? <Link className="btn-link" to="/default-register">Create Account</Link>
                                </p>
                            </form>
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


