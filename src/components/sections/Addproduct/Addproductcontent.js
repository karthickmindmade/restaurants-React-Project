import React, { useEffect, useRef, Component, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Productslider from './Productslider'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/cake/actions';
import SelectOption from '../../common/selectOption';
export default function Addproductcontent() {
    const Title = useRef();
    const TypeOfCake = useRef();
    const Price = useRef();
    const Description = useRef()
    const file = useRef()
    const eggOrEggless = useRef()
    const Stock = useRef()
    const [files, setimages] = useState([])
    const dispatch = useDispatch();
    const [flavor, setflavor] = useState()
    const [flavorlist, setflavorlist] = useState([])
    const [shape, setshape] = useState()
    const [shapelist, setshapelist] = useState([])
    const [topping, settopping] = useState()
    const [toppinglist, settoppinglist] = useState([])
    const [weight, setweight] = useState()
    const [weightlist, setweightlist] = useState([])
    function addFlavor() {
        if (undefined === flavor || '' === flavor) {

        } else {
            setflavorlist([...flavorlist, flavor])
        }
    }
    function setdeleteFlavor(e) {
        setflavorlist(flavorlist.filter((val) => { if (val !== e.target.value) { return val } }))

    }


    function addshape() {
        if (undefined === shape || '' === shape) {

        } else {
            setshapelist([...shapelist, shape])
        }
    }
    function setdeleteshape(e) {
        setshapelist(shapelist.filter((val) => { if (val !== e.target.value) { return val } }))

    }


    function addtopping() {
        if (undefined === topping || '' === topping) {

        } else {
            settoppinglist([...toppinglist, topping])
        }
    }
    function setdeletetopping(e) {
        settoppinglist(toppinglist.filter((val) => { if (val !== e.target.value) { return val } }))

    }


    function addweight() {
        if (undefined === weight || '' === weight) {

        } else {
            setweightlist([...weightlist, weight])
        }
    }
    function setdeleteweight(e) {
        setweightlist(weightlist.filter((val) => { if (val !== e.target.value) { return val } }))

    }

    const AddCake = (e) => {
        e.preventDefault();
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append("files", files[i]);
        }

        data.append("Title", "Title6765");
        data.append("Description", "Description");
        data.append("TypeOfCake", "TypeOfCake");
        data.append("eggOrEggless", "eggOrEggless")
        data.append("Price", "Price");
        data.append("Ratings", "Ratings");
        data.append("VendorID", "VendorID");
        data.append("VendorName", "VendorName")
        data.append("MobileNumberVendor", "MobileNumberVendor");
        data.append("FlavorList", "FlavorList");
        data.append("ShapesLists", "ShapesLists");
        data.append("CakeToppings", "CakeToppings")
        data.append("WeightList", "WeightList")

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
        <div className="ms-content-wrapper">
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
                                            <input type="text" className="form-control" ref={Title} placeholder="Product Name" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom24">Cake Type</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom24" ref={TypeOfCake} placeholder="Cake Type" required />
                                            <div className="invalid-feedback">
                                                Cake Type
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom25">Price</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom25" ref={Price} placeholder="$10" required />
                                            <div className="invalid-feedback">
                                                Price
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom22">Egg Or Eggless</label>
                                        <div className="input-group">
                                            <select className="form-control" id="validationCustom22" ref={eggOrEggless} required>
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
                                            <select className="form-control" id="validationCustom23" ref={Stock} required>
                                                <option value="OutOfStock">OutOfStock</option>
                                                <option value="InStock">OfStock</option>

                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a Currency
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom12">Description</label>
                                        <div className="input-group">
                                            <textarea rows={5} id="validationCustom12" className="form-control" ref={Description} placeholder="Message" required />
                                            <div className="invalid-feedback">
                                                Please provide a message.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom12">Product Image</label>
                                        <div className="custom-file">
                                            <input type='file' className="custom-file-input" onChange={(e) => setimages(e.target.files)} name='files' multiple />
                                            <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Images...</label>
                                            <div className="invalid-feedback">Example invalid custom file feedback</div>
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
                                    <Productslider images={files} />

                                </div>
                                <div className='form-row m-3' >
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom22">Add Flavor</label>
                                        <div className="input-group">
                                            <div className='display-flex'>
                                                <input type="text" className="form-control" onChange={(e) => setflavor(e.target.value)} />
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
                                            <div className='display-flex'>
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
                                            <div className='display-flex'>
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
                                            <div className='display-flex'>
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {CakesList.addCakeStatus === "" || CakesList.addCakeStatus === undefined ? <></> :
                    <div className={CakesList.addCakeStatus.statusCode === 400 ? "alert alert-danger" : "alert alert-success"} role="alert">
                        <strong>Well done!</strong> You successfully read this important alert message.
                    </div>
                }
            </div>
        </div>

    );
}


