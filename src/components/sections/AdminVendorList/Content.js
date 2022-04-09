import React, { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import { useDispatch, useSelector } from "react-redux";
import actions from '../../../redux/Vendor/actions';
import ShowPerPage from '../../common/ShowPerPage';
import TableSearch from '../../common/TableSearch';
import Pagination from '../../common/Pagination';
import { useHistory } from 'react-router-dom/esm/react-router-dom';

// Table data
export default function Content() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    //  geting vendor list from from redux vendor reducer
    const vendorsList = useSelector(
        (state) => state.VendorReducer
    );
    useEffect(() => {
        dispatch({ type: actions.GET_ALL_VENDORS })
    }, [])
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentdata = vendorsList.vendorsList.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    //route to vendor profile by click vendor row
    function ViewVendor(user) {
        console.log(user)
        history.push('/admin-vendor-list-detail', user)
    }
    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumb />
                    <div className="ms-panel">
                        <div className="ms-panel-header">
                            <h6>Vendor List</h6>
                        </div>
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-4_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div class="row">
                                        <ShowPerPage label="Show"  >
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </ShowPerPage>
                                        <TableSearch label="Search" type="search" placeholder="" />
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table class="table w-100 thead-primary dataTable no-footer" role="grid" >
                                                <thead>
                                                    <tr>
                                                        <th  >
                                                            Vendor ID
                                                        </th>
                                                        <th>
                                                            Profile Image
                                                        </th>
                                                        <th  >
                                                            Vendor Name
                                                        </th>
                                                        <th  >
                                                            Email ID
                                                        </th>
                                                        <th >
                                                            Phonenumber
                                                        </th>
                                                        <th >
                                                            DeliveryCharge
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentdata.map((user) =>
                                                        <tr onClick={() => ViewVendor(user)} key={user._id} >
                                                            <td>{user._id}</td>
                                                            <td><img className='Avatar profile-image' src={user.ProfileImage} /></td>
                                                            <td>{user.VendorName}</td>
                                                            <td>
                                                                {user.Email}
                                                            </td>
                                                            <td>{user.PhoneNumber}</td>
                                                            <td>{user.DeliveryCharge}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <Pagination
                                        postsPerPage={postsPerPage}
                                        totalPosts={vendorsList.vendorsList.length}
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
