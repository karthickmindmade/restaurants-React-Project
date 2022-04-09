import React, {  useRef, useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import customerimg from '../../../assets/img/costic/customer-5.jpg'
import Breadcrumb from './Breadcrumb';
import actions from '../../../redux/Admin/actions';

function Content(props) {

    const auth = useSelector(
        state => state.authReducer
    );
    
    const dispatch = useDispatch();
    var [imageUrl,setImageUrl] = useState();
    var [image, setImage] = useState(auth.token.result.ProfileImage === undefined ? customerimg : auth.token.result.ProfileImage)
    const [errMessage, setErrMessage] = useState('');
    const Email = useRef();
    const Password = useRef();
    const AdminName = useRef();
    const file = useRef();

    const handleImageSelect = (e) => {
        setImage(image = e.target.files[0]);
        if(image){
            setImageUrl(URL.createObjectURL(image))
        }
    };

    const EditProfile = () => {
     
        if(Email.current.value && Password.current.value && AdminName.current.value){
            if(file.current.value){
                const data = new FormData();
                data.append("Email", Email.current.value);
                data.append("Password", Password.current.value);
                data.append("AdminName", AdminName.current.value);
                data.append("file", image);
        
                dispatch({
                    type: actions.GET_ADMIN_DETAILS, 
                    payload: { 
                        adminId: auth.token.result._id, 
                        updateAdmin : data 
                    }
                }); 
            }else{
                console.log('file not selected')
                const data = new FormData();
                data.append("Email", Email.current.value);
                data.append("Password", Password.current.value);
                data.append("AdminName", AdminName.current.value);
        
                dispatch({
                    type: actions.GET_ADMIN_DETAILS, 
                    payload: { 
                        adminId: auth.token.result._id, 
                        updateAdmin : data 
                     }
                }); 
            }
        }else{
            setErrMessage('*required')
        }
    };

    return (
        <>
        
         <div className="ms-content-wrapper">
            <div className="col-md-12">
                <Breadcrumb closeEdit={props.closeEdit} />
            </div>
            <div className="ms-profile-overview">
                <div className="ms-profile-cover">
                    <div className='profile-img-div'>
                        <img className="ms-profile-img" src={imageUrl ? imageUrl : image} alt="people" />
                        <div className='profile-upload-i'>
                            <input type='file' className='profile-img-upload' onChange={handleImageSelect} name='file' ref={file} />
                            <i className="fa fa-upload"></i>
                        </div>

                    </div>
                    <div className="ms-profile-user-info">
                        <h4 className="ms-profile-username text-white">{auth.token.result.AdminName}</h4>
                        <h2 className="ms-profile-role">{auth.token.result.Email}</h2>
                    </div>
                </div>
            </div>
                    <div className="ms-panel ms-panel-fh ">
                        <div className="ms-panel-header"><h6>Edit Profile</h6></div>
                        <div className="ms-panel-body">
                            <form className="needs-validation clearfix" noValidate="">
                                <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom18">Admin Name <span className='text-danger'>*</span></label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" ref={AdminName} defaultValue={auth.token.result.AdminName} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom18">Email <span className='text-danger'>*</span></label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" ref={Email} placeholder="Email" defaultValue={auth.token.result.Email} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom18">Password <span className='text-danger'>*</span></label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" ref={Password} defaultValue={auth.token.result.Password} />
                                        </div>
                                    </div>
                                    <p className='text-danger'>{errMessage}</p>
                                </div>
                              
                                    <>
                                        <button className="btn btn-secondary float-right mr-4" type="button" onClick={EditProfile} >Save</button>
                                        <button className="btn btn-secondary float-right mr-4" type="submit" onClick={props.closeEdit} >Cancel</button>
                                    </>
                                 
                            </form>
                        </div>
                       
                    </div>
        </div >
        </>
       
    );
}
export default Content;