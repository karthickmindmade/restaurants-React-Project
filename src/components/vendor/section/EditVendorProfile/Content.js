import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import customerimg from '../../../../assets/img/costic/customer-5.jpg';
import Breadcrumb from '../../../vendor/section/EditVendorProfile/Breadcrumb';
import actions from '../../../../redux/Vendor/actions';

function EditVendorProfileContent(props) {

    const auth = useSelector(
        state => state.authReducer
    );
    const dispatch = useDispatch()
    var [image, setImage] = useState(auth.token.result.ProfileImage === undefined ? customerimg : auth.token.result.ProfileImage)
    var [imageUrl,setImageUrl] = useState();
    const [errMessage, setErrMessage] = useState('');
    const Email = useRef();
    const Password = useRef();
    const VendorName = useRef();
    const Street = useRef();
    const City = useRef();
    const District = useRef();
    const Pincode = useRef();
    const PhoneNumber = useRef();
    const Description = useRef();
    const DeliveryCharge = useRef();
    const file = useRef();

    const handleImageSelect = (e) => {
        setImage(image = e.target.files[0]);
        if(image){
            setImageUrl(URL.createObjectURL(image))
        }
    };

    const EditProfile = () => {
        if(Email.current.value && Password.current.value && VendorName.current.value && Street.current.value &&
            City.current.value && District.current.value && Pincode.current.value && PhoneNumber.current.value &&
            DeliveryCharge.current.value && Description.current.value){
                if(file.current.value){
                    const data = new FormData();
                    data.append("Email", Email.current.value);
                    data.append("Password", Password.current.value);
                    data.append("VendorName", VendorName.current.value);
                    data.append("Street", Street.current.value)
                    data.append("City", City.current.value);
                    data.append("District", District.current.value);
                    data.append("Pincode", Pincode.current.value);
                    data.append("file", image);
                    data.append("PhoneNumber", PhoneNumber.current.value);
                    data.append("DeliveryCharge", DeliveryCharge.current.value)
                    data.append("Description", Description.current.value);
                    dispatch({
                        type: actions.UPDATE_VENDOR, payload: { reqBody: data, reqParamid: auth.token.result._id }
                    });
                }else{
                    const data = new FormData();
                    data.append("Email", Email.current.value);
                    data.append("Password", Password.current.value);
                    data.append("VendorName", VendorName.current.value);
                    data.append("Street", Street.current.value)
                    data.append("City", City.current.value);
                    data.append("District", District.current.value);
                    data.append("Pincode", Pincode.current.value);
                    data.append("PhoneNumber", PhoneNumber.current.value);
                    data.append("DeliveryCharge", DeliveryCharge.current.value)
                    data.append("Description", Description.current.value);
                    dispatch({
                        type: actions.UPDATE_VENDOR, payload: { reqBody: data, reqParamid: auth.token.result._id }
                    });
                }
            }else{
                setErrMessage('*required')
            }
        
    }

    return (
        <div className="ms-content-wrapper">
            <div className="col-md-12">
                <Breadcrumb closeEdit={props.closeEdit}/>
            </div>
            <div className="ms-profile-overview">
                <div className="ms-profile-cover">
                    <div className='profile-img-div'>
                        <img className="ms-profile-img" src={imageUrl ? imageUrl : image} alt="people" />
                        <div className='profile-upload-i'>
                            <input type='file' className='profile-img-upload' onChange={handleImageSelect} name='file' ref={file} />
                            <i class="fa fa-upload"></i>
                        </div>
                    </div>
                    <div className="ms-profile-user-info">
                        <h4 className="ms-profile-username text-white">{auth.token.result.VendorName}</h4>
                        <h2 className="ms-profile-role">{auth.token.result.Email}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-5 col-md-12">
                    <div class="ms-panel ms-panel-fh">
                        <div class="ms-panel-header"><h6>Edit Profile</h6></div>
                        <div class="ms-panel-body">
                            <form class="needs-validation clearfix" noValidate="">
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Email <span className='text-danger'>*</span></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" ref={Email} placeholder="Email" defaultValue={auth.token.result.Email} />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Password <span className='text-danger'>*</span></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" ref={Password} defaultValue={auth.token.result.Password} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Vendor Name <span className='text-danger'>*</span></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" ref={VendorName} defaultValue={auth.token.result.VendorName} placeholder="VendorName" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Description <span className='text-danger'>*</span></label>
                                        <div class="input-group">
                                            <textarea type="text" class="form-control" ref={Description} defaultValue={auth.token.result.Description} placeholder="Description" />
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
                            <h6>Add Address</h6>
                        </div>
                        <div className="ms-panel-body">
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom25">Street <span className='text-danger'>*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={Street} defaultValue={auth.token.result.Address.Street} placeholder="Street" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>City <span className='text-danger'>*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={City} defaultValue={auth.token.result.Address.City} placeholder="City" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom24">District <span className='text-danger'>*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={District} defaultValue={auth.token.result.Address.District} placeholder="District" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Pincode <span className='text-danger'>*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={Pincode} defaultValue={auth.token.result.Address.Pincode} placeholder="Pincode" />
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="validationCustom18">PhoneNumber <span className='text-danger'>*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={PhoneNumber} defaultValue={auth.token.result.PhoneNumber} placeholder="PhoneNumber" />
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="validationCustom18">DeliveryCharge <span className='text-danger'>*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={DeliveryCharge} defaultValue={auth.token.result.DeliveryCharge} placeholder="DeliveryCharge" />
                                    </div>
                                    <p className='text-danger'>{errMessage}</p>
                                </div>
                                
                                    <>
                                        <button class="btn btn-secondary float-right mr-4" type="submit" onClick={EditProfile} >Save</button>
                                        <button class="btn btn-secondary float-right mr-4" type="submit" onClick={props.closeEdit} >Cancel</button>
                                    </>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default EditVendorProfileContent;