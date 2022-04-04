import React, { useEffect, Component, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../redux/cake/actions';
import CakeDetailsImageSlider from './CakeDetailsImageSlider';
import Editproductcontent from '../EditProduct/EditProductContent';
export default function VendorDetailcontent(props) {
    const [open, setopen] = useState(false)
    // const {state}=props
    const dispatch = useDispatch();

    const [cakedetails, setcakedetails] = useState([])
    useEffect(() => {
        dispatch({
            type: actions.GET_SINGLE_CAKEDETAILS, payload: '624a75492dcd834b7aed1b9c'
        });
    }, [])
    const Cake = useSelector(
        (state) => state.CakesReducer
    );
    useEffect(() => {
        setcakedetails(Cake.CakeDetails)
    }, [setcakedetails, Cake])

    console.log(cakedetails)
    return (

        <div className="ms-content-wrapper">
            {open === false ? <div className="row">
                <div className="col-md-12">
                    <Breadcrumb />
                </div>
                <div className="col-md-12">
                    <div className="ms-panel">
                        <div className="ms-panel-header">
                            <h6 >Product Details</h6>
                        </div>
                        <div className="ms-panel-body">
                            <CakeDetailsImageSlider image={cakedetails.Images} title={cakedetails.Title} />
                        </div>
                    </div>
                </div>
                <div className=" col-md-6">
                    <div className="ms-panel ms-panel-fh">
                        <div className="ms-panel-body">
                            <h4 className="section-title bold">Product Info</h4>
                            <table className="table ms-profile-information">
                                <tbody>
                                    <tr>
                                        <th scope="row">Price</th>
                                        <td>{cakedetails.Price}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">EggAdded or EggLess</th>
                                        <td>{cakedetails.eggOrEggless}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Availiblity</th>
                                        <td><span className="badge badge-pill badge-primary">In stock</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Delivery Charges</th>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">SKU Identification</th>
                                        <td>23445</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="new">
                                <button type="button" className="btn btn-primary" onClick={() => setopen(true)}>Edit</button>
                                <button type="button" className="btn btn-secondary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6">
                    <div className="ms-panel ms-panel-fh">
                        <div className="ms-panel-body">
                            <h4 className="section-title bold">Product Details </h4>
                            <p className="description">{cakedetails.Description}</p>
                        </div>
                        <div className="ms-quick-stats">
                            <div className="ms-stats-grid">
                                <i className="fa fa-bullhorn" />
                                <p className="ms-text-dark">1,033</p>
                                <span>Today Order</span>
                            </div>
                            <div className="ms-stats-grid">
                                <i className="fa fa-heart" />
                                <p className="ms-text-dark">3,039</p>
                                <span>Favourite</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
                <Editproductcontent close={() => setopen(false)}  vendor={cakedetails} />
            }

        </div>

    );
}


