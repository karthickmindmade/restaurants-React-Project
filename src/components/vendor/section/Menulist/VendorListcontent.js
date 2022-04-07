import React, { Component, useEffect,useState } from 'react';
import Breadcrumbs from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import $ from 'jquery';
import { useDispatch, useSelector } from "react-redux";
import actions from '../../../../redux/cake/actions';
import { useHistory } from 'react-router-dom/esm/react-router-dom';
import Pagination from '../../../common/Pagination';

export default function VendorListcontent() {
    const history = useHistory();
    //initialize datatable
    const dispatch = useDispatch();
    const CakesList = useSelector(
        (state) => state.CakesReducer
    );
    console.log(CakesList.CakesList)
    useEffect(() => {
        dispatch({ type: actions.GET_ALL_CAKES })
    }, [dispatch, actions.GET_ALL_CAKES])




function ViewDetails(cake){
    history.push('/Vendor-Productdetail',cake)
}




const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);
// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentdata = CakesList.CakesList.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs />
                    <div className="ms-panel">
                        <div className="ms-panel-header">
                            <h6>Vendor Product List</h6>
                        </div>
                        <div className="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-5_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6">
                                            <div class="dataTables_length" id="data-table-5_length">
                                                <label>
                                                    Show
                                                    <select name="data-table-5_length" aria-controls="data-table-5" class="custom-select custom-select-sm form-control form-control-sm">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                    entries
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div id="data-table-5_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="data-table-5" /></label></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table id="data-table-5" class="table w-100 thead-primary dataTable no-footer" role="grid" aria-describedby="data-table-5_info" >
                                                <thead>
                                                    <tr role="row">
                                                        <th class="sorting sorting_asc" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Product ID: activate to sort column descending" >Product ID</th>
                                                        <th class="sorting" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-label="Product Name: activate to sort column ascending" >Product Name</th>
                                                        <th class="sorting" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-label="Quantity: activate to sort column ascending" >Quantity</th>
                                                        <th class="sorting" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" >Status</th>
                                                        <th class="sorting" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending" >Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentdata.map((cake) =>
                                                        <tr class="odd" onClick={()=>ViewDetails(cake)}>
                                                            <td class="sorting_1">{cake._id}</td>
                                                            <td><img src={cake.Images[0]} />{cake.Title}</td>
                                                            <td>{cake.TypeOfCake}</td>
                                                            <td ><span className={cake.Stock}>{cake.Stock}</span></td>
                                                            <td>{cake.Price}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <Pagination 
                                    postsPerPage={postsPerPage}
                                    totalPosts={CakesList.CakesList.length}
                                    paginate={paginate}
                                    PreviouPage={() => setCurrentPage(currentPage - 1)}
                                    NextPage={() => setCurrentPage(currentPage + 1)}
                                    currentPage={currentPage}
                                   />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
