import React, { useEffect, useRef, Component, useState } from 'react';
import Breadcrumb from '../VendorProductsdetail/Breadcrumb';

import { useDispatch, useSelector } from 'react-redux';

import actions from '../../../../redux/cake/actions';
import SelectOption from '../../../common/selectOption';
import EditProductslider from './editImageSlider';
import ImgSelectOption from '../Addproduct/imgSelect';
import Imgloop from './imgloop';
export default function Editproductcontent(props) {
    const { vendor } = props
    const Title = useRef();
    const TypeOfCake = useRef();
    const Price = useRef();
    const Description = useRef()
    const file = useRef()
    const eggOrEggless = useRef()
    const Stock = useRef()
    const [files, setimages] = useState([])
    const dispatch = useDispatch();
    const [updateImage, setupdateImage] = useState(vendor.Images)
const [deleteopen,setdeleteopen]=useState(false)
    const [flavor, setflavor] = useState()
    const [flavorlist, setflavorlist] = useState(vendor.FlavorList)
    const [shape, setshape] = useState()
    const [shapelist, setshapelist] = useState(vendor.ShapesLists)
    const [topping, settopping] = useState()
    const [toppinglist, settoppinglist] = useState(vendor.CakeToppings)
    const [weight, setweight] = useState()
    const [weightlist, setweightlist] = useState(vendor.WeightList)
    // flavorlist
    function addFlavor() {
        if (undefined === flavor || '' === flavor || flavorlist.filter((val) => { if (val === flavor) { return val } })[0] === flavor) {
        } else {
            setflavorlist([...flavorlist, flavor])
        }
    }
    function setdeleteFlavor(e) {
        setflavorlist(flavorlist.filter((val) => { if (val !== e.target.value) { return val } }))

    }
    // cakeshape list
    function addshape() {
        if (undefined === shape || '' === shape || shapelist.filter((val) => { if (val === shape) { return val } })[0] === shape) {

        } else {
            setshapelist([...shapelist, shape])
        }
    }
    function setdeleteshape(e) {
        setshapelist(shapelist.filter((val) => { if (val !== e.target.value) { return val } }))
    }
    //caketoppingslist
    function addtopping() {
        if (undefined === topping || '' === topping || toppinglist.filter((val) => { if (val === topping) { return val } })[0] === topping) {

        } else {
            settoppinglist([...toppinglist, topping])
        }
    }
    function setdeletetopping(e) {
        settoppinglist(toppinglist.filter((val) => { if (val !== e.target.value) { return val } }))

    }
    //cakeweightlist
    function addweight() {
        if (undefined === weight || '' === weight || weightlist.filter((val) => { if (val === weight) { return val } })[0] === weight) {

        } else {
            setweightlist([...weightlist, weight])
        }
    }
    function setdeleteweight(e) {
        setweightlist(weightlist.filter((val) => { if (val !== e.target.value) { return val } }))

    }
    function setdeleteImage(e) {
        e.preventDefault();
        setupdateImage(updateImage.filter((val) => { if (val !== e.target.value) { return val } }))

    }
    //addcake
    const AddCake = (e) => {
        e.preventDefault();
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append("files", files[i]);
        }
        data.append("Title", Title.current.value);
        data.append("Description", Description.current.value);
        data.append("TypeOfCake", TypeOfCake.current.value);
        data.append("eggOrEggless", eggOrEggless.current.value)
        data.append("Price", Price.current.value);
        data.append("Ratings", "Ratings");
        data.append("Stock", Stock.current.value);
        data.append("VendorID", "VendorID");
        data.append("VendorName", "VendorName")

        data.append("MobileNumberVendor", "MobileNumberVendor");
        for (let i = 0; i < flavorlist.length; i++) {
            data.append("FlavorList", flavorlist[i]);
        }
        for (let i = 0; i < shapelist.length; i++) {
            data.append("ShapesLists", shapelist[i]);
        }
        for (let i = 0; i < toppinglist.length; i++) {
            data.append("CakeToppings", toppinglist[i]);
        }
        for (let i = 0; i < weightlist.length; i++) {
            data.append("WeightList", weightlist[i]);
        }

        dispatch({
            type: actions.Add_CAKES, payload: data
        });
    }
    console.log(files)
    const CakesList = useSelector(
        (state) => state.CakesReducer
    );
    console.log(CakesList.addCakeStatus)
    console.log(flavorlist)
    return (
        <div className="row">
            <div className="col-md-12">
                <Breadcrumb />
            </div>
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Add Product Form</h6>
                    </div>
                    <div className="ms-panel-body">
                        <form className="needs-validation clearfix" noValidate>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationCustom18">Title</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" ref={Title} placeholder="Product Name" defaultValue={vendor.Title} required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom24">Cake Type</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="validationCustom24" ref={TypeOfCake} defaultValue={vendor.TypeOfCake} placeholder="Cake Type" required />
                                        <div className="invalid-feedback">
                                            Cake Type
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom25">Price</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="validationCustom25" ref={Price} defaultValue={vendor.Price} placeholder="$10" required />
                                        <div className="invalid-feedback">
                                            Price
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom22">Egg Or Eggless</label>
                                    <div className="input-group">
                                        <select className="form-control" id="validationCustom22" defaultValue={vendor.eggOrEggless} ref={eggOrEggless} required>
                                            <option value="EggAdded">EggAdded</option>
                                            <option value="Eggless">Eggless</option>

                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a Egg Or Eggless.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom23">Stock</label>
                                    <div className="input-group">
                                        <select className="form-control" id="validationCustom23" ref={Stock} defaultValue={vendor.Stock} required>
                                            <option value="OutOfStock">OutOfStock</option>
                                            <option value="InStock">InStock</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a Currency
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationCustom12">Description</label>
                                    <div className="input-group">
                                        <textarea rows={5} id="validationCustom12" className="form-control" ref={Description} defaultValue={vendor.Description} placeholder="Message" required />
                                        <div className="invalid-feedback">
                                            Please provide a message.
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor="validationCustom12">Product Image</label>
                                <div className="col-md-12 mb-3 display-flex">
                                    {/* <ImgSelectOption divClassName="display-flex" image={files} imagesurl={updateImage} deleteFun={(e) => setdeleteImage(e)}  deleteButton={deleteopen===false?'btn-secondary':'btn-secondary display-non'} /> */}
                                    <Imgloop image={files} />
                                    <div className='image-upload-div' onClick={()=>setdeleteopen(true)}>
                                        <input type='file'  onChange={(e) => setimages(e.target.files)} name='files' multiple />
                                        <i className="material-icons ">add</i>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Product </h6>
                            </div>
                            <div className="ms-panel-body">
                                <EditProductslider image={files} imagesurl={updateImage} />
                                
                            </div>
                            <div className='form-row m-3' >
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom22">Add Flavor</label>
                                    <div className="input-group">
                                        <div className='display-flex w-100'>
                                            <input type="text" className="form-control " onChange={(e) => setflavor(e.target.value)} />
                                            <button className='btn-secondary' onClick={addFlavor}>add</button>
                                        </div>
                                        <div className="invalid-feedback">
                                            Please select a Catagory.
                                        </div>
                                    </div>
                                    <SelectOption className="option-control" option={flavorlist} deleteFun={(e) => setdeleteFlavor(e)} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom23">Add Shapes</label>
                                    <div className="input-group">
                                        <div className='display-flex w-100'>
                                            <input type="text" className="form-control" onChange={(e) => setshape(e.target.value)} />
                                            <button className='btn-secondary' onClick={addshape}>add</button>
                                        </div>
                                        <div className="invalid-feedback">
                                            Please select a Currency
                                        </div>
                                    </div>
                                    <SelectOption className="option-control" option={shapelist} deleteFun={(e) => setdeleteshape(e)} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom22">Add CakeToppings</label>
                                    <div className="input-group">
                                        <div className='display-flex w-100'>
                                            <input type="text" className="form-control" onChange={(e) => settopping(e.target.value)} />
                                            <button className='btn-secondary' onClick={addtopping}>add</button>
                                        </div>
                                        <div className="invalid-feedback">
                                            Please select a Catagory.
                                        </div>
                                    </div>
                                    <SelectOption className="option-control" option={toppinglist} deleteFun={(e) => setdeletetopping(e)} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom23">Add WeightList</label>
                                    <div className="input-group">
                                        <div className='display-flex w-100'>
                                            <input type="text" className="form-control" onChange={(e) => setweight(e.target.value)} />
                                            <button className='btn-secondary' onClick={addweight}>add</button>
                                        </div>
                                        <div className="invalid-feedback">
                                            Please select a Catagory.
                                        </div>
                                    </div>
                                    <SelectOption className="option-control" option={weightlist} deleteFun={(e) => setdeleteweight(e)} />
                                </div>
                            </div>
                            <div className="ms-panel-header new">
                                <button className="btn btn-secondary d-block" type="submit" onClick={AddCake}>Save</button>
                                <button className="btn btn-secondary d-block" onClick={props.close}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {CakesList.addCakeStatus === "" || CakesList.addCakeStatus === undefined ? <></> :
                <div className={CakesList.addCakeStatus.statusCode === 400 ? "alert alert-danger" : "alert alert-success"} role="alert">
                    <strong>Well done!</strong> {CakesList.addCakeStatus.message}
                </div>
            }
        </div>

    );
}

