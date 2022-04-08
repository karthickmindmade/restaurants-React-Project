import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import customerimg from '../../../../assets/img/costic/customer-5.jpg';
import Breadcrumb from '../../../vendor/section/EditVendorProfile/Breadcrumb';
import actions from '../../../../redux/Vendor/actions';
import CircleDotSpinner from '../../../common/CircleDotSpinner';
function EditVendorProfileContent(props) {
    const { vendorDetails } = props
    const dispatch = useDispatch()
    const [image, setimage] = useState(vendorDetails.ProfileImage === undefined ? customerimg : vendorDetails.ProfileImage)
    const Email = useRef();
    const Password = useRef();
    const VendorName = useRef();
    const Street = useRef()
    const City = useRef()
    const District = useRef()
    const Pincode = useRef()
    const PhoneNumber = useRef()
    const Description = useRef()
    const DeliveryCharge = useRef()
    const [loader, setloader] = useState(false)

    const AddCake = () => {
        setloader(true)
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
            type: actions.UPDATE_VENDOR, payload: { reqBody: data, reqParamid: vendorDetails._id }
        });
    }

    const Vendor = useSelector(
        (state) => state.VendorReducer
    );
    console.log(Vendor.updateVendorStatus)
    var imageurl
    if (image !== customerimg && image !== vendorDetails.ProfileImage) {
        imageurl = URL.createObjectURL(image)
    } else {
        imageurl = image
    }
    useEffect(() => {
        if (Vendor.updateVendorStatus.statusCode === 200 || Vendor.updateVendorStatus.statusCode === 400) {
            setloader(false)
        }
    }, [setloader, Vendor])


    return (
        <div className="ms-content-wrapper">
            <div className="col-md-12">
                <Breadcrumb />
            </div>
            <div className="ms-profile-overview">
                <div className="ms-profile-cover">
                    <div className='profile-img-div'>
                        <img className="ms-profile-img" src={image === 'x' ? customerimg : imageurl} alt="people" />
                        <div className='profile-upload-i'>
                            <input type='file' className='profile-img-upload' onChange={(e) => setimage(e.target.files[0])} name='file' />
                            <i class="fa fa-upload"></i>
                        </div>
                    </div>
                    <div className="ms-profile-user-info">
                        <h4 className="ms-profile-username text-white">{vendorDetails.VendorName}</h4>
                        <h2 className="ms-profile-role">{vendorDetails.Email}</h2>
                    </div>
                </div>
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
                                            <input type="text" class="form-control" ref={Email} placeholder="Email" defaultValue={vendorDetails.Email} />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Password</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" ref={Password} defaultValue={vendorDetails.Password} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Vendor Name</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" ref={VendorName} defaultValue={vendorDetails.VendorName} placeholder="VendorName" />
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom18">Description</label>
                                        <div class="input-group">
                                            <textarea type="text" class="form-control" ref={Description} defaultValue={vendorDetails.Description} placeholder="Description" />
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
                                        <input type="text" class="form-control" ref={Street} defaultValue={vendorDetails.Address.Street} placeholder="Street" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>City</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={City} defaultValue={vendorDetails.Address.City} placeholder="City" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom24">District</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={District} defaultValue={vendorDetails.Address.District} placeholder="District" />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Pincode</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={Pincode} defaultValue={vendorDetails.Address.Pincode} placeholder="Pincode" />
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="validationCustom18">PhoneNumber</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={PhoneNumber} defaultValue={vendorDetails.PhoneNumber} placeholder="PhoneNumber" />
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="validationCustom18">DeliveryCharge</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" ref={DeliveryCharge} defaultValue={vendorDetails.DeliveryCharge} placeholder="DeliveryCharge" />
                                    </div>
                                </div>
                                {loader === true ?
                                    <CircleDotSpinner />
                                    :
                                    <>
                                        <button class="btn btn-secondary float-right mr-4" type="submit" onClick={AddCake} >Save</button>
                                        <button class="btn btn-secondary float-right mr-4" type="submit" onClick={props.closeEdit} >Cancel</button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default EditVendorProfileContent;