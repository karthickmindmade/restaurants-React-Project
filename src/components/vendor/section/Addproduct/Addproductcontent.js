import React, { useEffect, useRef, Component, useState } from 'react';
import Breadcrumb from '../Addproduct/Breadcrumb';
import Productslider from './Productslider'
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../../../redux/cake/actions';
import SelectOption from '../../../common/selectOption';
import CircleDotSpinner from '../../../common/CircleDotSpinner';
import FailAlert from '../../../common/failAlert';
import SuccessAlert from '../../../common/SuccessAlert';

export default function Addproductcontent() {
    const Title = useRef();
    const TypeOfCake = useRef();
    const Price = useRef();
    const Description = useRef()
    const file = useRef()
    const eggOrEggless = useRef()
    const Stock = useRef()
    const [files, setfiles] = useState([])
    const dispatch = useDispatch();
    const [flavor, setflavor] = useState()
    const [flavorlist, setflavorlist] = useState([])
    const [shape, setshape] = useState()
    const [shapelist, setshapelist] = useState([])
    const [topping, settopping] = useState()
    const [toppinglist, settoppinglist] = useState([])
    const [weight, setweight] = useState()
    const [weightlist, setweightlist] = useState([])
    const [loader, setloader] = useState(false)
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
    //addcake
    console.log(files)
    const AddCake = (e) => {
        e.preventDefault();
        setloader(true)
        console.log(Title.current.value)
        console.log(Description.current.value)
        console.log(TypeOfCake.current.value)
        console.log(eggOrEggless.current.value)
        console.log(Price.current.value)
        console.log(Stock.current.value)
        console.log(flavorlist)
        console.log(shapelist)
        console.log(toppinglist)
        console.log(weightlist)
        console.log(files)
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append("files", files[i]);
        }
        data.append("Title", Title.current.value);
        data.append("Description", Description.current.value);
        data.append("TypeOfCake", TypeOfCake.current.value);
        data.append("EggOrEggless", eggOrEggless.current.value)
        data.append("Price", Price.current.value);
        data.append("Ratings", "Ratings");
        data.append("Stock", Stock.current.value)
        data.append("VendorID", "VendorID");
        data.append("VendorName", "VendorName")
        data.append("VendorPhoneNumber", "VendorPhoneNumber");
        for (let i = 0; i < flavorlist.length; i++) {
            data.append("FlavourList", flavorlist[i]);
        }
        for (let i = 0; i < shapelist.length; i++) {
            data.append("ShapeList", shapelist[i]);
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
        setTimeout(() => { dispatch({ type: actions.Add_CAKES_STATUS, payload: { addCakeStatus: [] } }); }, 5000);
    }
    console.log(files)

    const CakesList = useSelector(
        (state) => state.CakesReducer
    );
    console.log(CakesList.addCakeStatus)
    useEffect(() => {
        if (CakesList.addCakeStatus.statusCode === 200 || CakesList.addCakeStatus.statusCode === 400) {
            setloader(false)
        }
    }, [CakesList, setloader])


    function removeFile(e, index) {
        e.preventDefault()
        setfiles([...files].filter((_, i) => i !== index));
    };
    console.log(files)
    var imageurl = []
    for (let i = 0; i < files.length; i++) {
        imageurl.push(URL.createObjectURL(files[i]))
    }
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
                                        <label >Egg Or Eggless</label>
                                        <div className="input-group">
                                            <select className="form-control" ref={eggOrEggless} >
                                                <option value="EggAdded">EggAdded</option>
                                                <option value="Eggless">Eggless</option>

                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a Egg Or Eggless.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label >Stock</label>
                                        <div className="input-group">
                                            <select className="form-control" ref={Stock} >
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
                                            <textarea rows={5} id="validationCustom12" className="form-control" ref={Description} placeholder="Message" required />
                                            <div className="invalid-feedback">
                                                Please provide a message.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom12">Product Image</label>
                                        <div className="custom-file">
                                            <input type='file' className="custom-file-input" onChange={(e) => setfiles(e.target.files)} name='files' multiple />
                                            <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Images...</label>
                                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                                        </div>
                                        <div className='display-flex'>
                                            {imageurl.map((value, index) =>
                                                <div className="imgPre">
                                                    <img width='70px' className='' src={value} /><button className='btn-secondary imgPreCloseBtn' value={value} onClick={(e) => removeFile(e, index)}>X</button>
                                                </div>
                                            )}
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
                                    {loader === true ? <CircleDotSpinner /> : <button className="btn btn-secondary d-block" type="submit" onClick={AddCake}>Save</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {CakesList.addCakeStatus.statusCode === 400 ? <FailAlert message={CakesList.addCakeStatus.message} /> : <></>}
                {CakesList.addCakeStatus.statusCode === 200 ? <SuccessAlert message={CakesList.addCakeStatus.message} /> : <></>}
            </div>
        </div>

    );
}


