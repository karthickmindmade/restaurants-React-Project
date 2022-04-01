import React, { useEffect, useRef, Component, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Productslider from './Productslider'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/cake/actions';
export default function Addproductcontent() {
    const Title = useRef();
    const TypeOfCake = useRef();
    const Price = useRef();
    const Description = useRef()
    const file = useRef()
    const eggOrEggless = useRef()
    const Stock = useRef()
    const [images, setimages] = useState()
    const dispatch = useDispatch();



  

    const data = new FormData();
    data.append("file", images);
    data.append("Title", "Title");
    data.append("Description", "Description");
    data.append("TypeOfCake",  "TypeOfCake");
    data.append("eggOrEggless", "eggOrEggless")
    data.append("Price", "Price");
    data.append("Ratings", "Ratings");
    data.append("VendorID",  "VendorID");
    data.append("VendorName", "VendorName")
    data.append("MobileNumberVendor", "MobileNumberVendor");
    data.append("FlavorList", "FlavorList");
    data.append("ShapesLists",  "ShapesLists");
    data.append("CakeToppings", "CakeToppings")
    data.append("WeightList", "WeightList")


    const AddCake = (e) => {
        e.preventDefault();
        dispatch({
            type: actions.Add_CAKES, payload: data

        });


    }

    const CakesList = useSelector(
        (state) => state.CakesReducer
    );
    console.log(CakesList.addCakeStatus)
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

                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                name="file"
                                                id="file"

                                                onChange={(e) => setimages(e.target.files[0])}
                                            />


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
                                    <Productslider />

                                </div>
                                <div className='form-row m-3' >
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom22">Add Flavor</label>
                                        <div className="input-group">
                                            <select className="form-control" id="validationCustom22" required>
                                                <option value>Catagory 1</option>
                                                <option value>Catagory 2</option>
                                                <option value>Catagory 3</option>
                                                <option value>Catagory 4</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a Catagory.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom23">Add Shapes</label>
                                        <div className="input-group">
                                            <select className="form-control" id="validationCustom23" required>
                                                <option value>USD</option>
                                                <option value>Bitcoins</option>
                                                <option value>EURO</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a Currency
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom22">Add CakeToppings</label>
                                        <div className="input-group">
                                            <select className="form-control" id="validationCustom22" required>
                                                <option value>Catagory 1</option>
                                                <option value>Catagory 2</option>
                                                <option value>Catagory 3</option>
                                                <option value>Catagory 4</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a Catagory.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom23">Add WeightList</label>
                                        <div className="input-group">
                                            <select className="form-control" id="validationCustom23" required>
                                                <option value>USD</option>
                                                <option value>Bitcoins</option>
                                                <option value>EURO</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a Currency
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-panel-header new">
                                    <button className="btn btn-secondary d-block" type="submit" onClick={AddCake}>Save</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {CakesList.addCakeStatus ==="" || CakesList.addCakeStatus === undefined ? <></> :
                        <div className={CakesList.addCakeStatus.statusCode === 400 ? "alert alert-danger" : "alert alert-success"} role="alert">
                            <strong>Well done!</strong> You successfully read this important alert message.
                        </div>
                    }
            </div>
        </div>

    );
}


