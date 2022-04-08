import React, { useEffect, Component, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../redux/cake/actions';
import CakeDetailsImageSlider from './CakeDetailsImageSlider';
import Editproductcontent from '../EditProduct/EditProductContent';
import { useLocation } from 'react-router-dom/esm/react-router-dom';
export default function VendorDetailcontent(props) {
    const [open, setopen] = useState(false)
    const state = useLocation()
    console.log(state.state)
    const dispatch = useDispatch();
    var cakedetails = []
    useEffect(() => {
        dispatch({
            type: actions.GET_SINGLE_CAKEDETAILS, payload: state.state._id
        });
    },[])
    const Cake = useSelector(
        (state) => state.CakesReducer
    );
    cakedetails = Cake.CakeDetails
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
                                        <td>{cakedetails.EggOrEggless}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Availiblity</th>
                                        <td><span className="badge badge-pill badge-primary">{cakedetails.Stock}</span></td>
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
                                <button type="button" className="btn btn-secondary ml-2">Delete</button>
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
                <Editproductcontent close={() => setopen(false)} vendor={cakedetails} />
            }
        </div>

    );
}


