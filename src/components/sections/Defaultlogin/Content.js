import React, {useRef, useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import { useDispatch,useSelector } from 'react-redux';
import actions from "../../../redux/Auth/actions";
import forgotpasswordActions from '../../../redux/ForgotPassword/actions';
import generator from 'generate-password';

export default function Content() {
    const [show1, setshow1] = useState(false);
    const[show2,setshow2] = useState(false);
    const[showMessage,setShowMessage] = useState('')
    const dispatch=useDispatch();
    const router = useHistory();
    const EmailR=useRef();
    const PasswordR=useRef();
    const ForgotEmail = useRef();
    const Status = useSelector(
        state => state.forgotpasswordReducer
    );

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
        setshow2(false);
        setShowMessage("");
    }
    function handleClose() {
        setshow1(false);
        setshow2(false);
        setShowMessage("");

    }
    const SignIn=(e)=>{
        e.preventDefault();
        dispatch({ type: actions.LOG_IN, payload: {Email: EmailR.current.value, Password: PasswordR.current.value} } );
        EmailR.current.value="";
        PasswordR.current.value="";
    }
    const handleReset = (e) => {
        e.preventDefault()
        setshow2(false);
        setShowMessage('');

       
        if(ForgotEmail.current.value === "" || ForgotEmail.current.value === undefined || ForgotEmail.current.value === null){
            setshow2(false);
            setShowMessage('Please enter your Email Id');
        }else{
           
        var Password = generator.generate({
            length: 10,
            numbers: true,
            symbols: true
          });
          dispatch({ type: forgotpasswordActions.FORGOT_PASSWORD, payload: {Email: ForgotEmail.current.value, Password: Password} } );
        }
    }

    useEffect(()=>{
        
        if(Status.Status === 'Invalid'){
            setshow2(false);
            setShowMessage('Please enter the valid Email Id');
        }else if(Status.Status === "Updated Successfully"){
            setshow2(true);
            setshow1(false);
        }
    },[Status])
    
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
                                        <input type="email" className="form-control" ref={EmailR} id="validationCustom08" placeholder="Email Address" required />
                                        <div className="invalid-feedback">Please provide a valid email.</div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="validationCustom09">Password</label>
                                    <div className="input-group">
                                        <input type="password" className="form-control" ref={PasswordR} id="validationCustom09" placeholder="Password" required />
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
                            <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" ref={ForgotEmail}/> <i class="material-icons">email</i>
                        </div>
                        <p className='text-danger'>{showMessage}</p>
                        <button type="submit" className="btn btn-primary shadow-none" onClick={handleReset}>Reset Password</button>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal className="modal-min" show={show2} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body className="text-center">
                    <i className="flaticon-secure-shield d-block" />
                    <p>*You will get new password through email associated with your account within two minutes</p>
                        <button type="submit" className="btn btn-primary shadow-none" onClick={handleClose}>OK</button>
                </Modal.Body>
            </Modal>

        </div>

    );
}


