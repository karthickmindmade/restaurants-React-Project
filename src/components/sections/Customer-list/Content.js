import React, { Component, useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import { useDispatch, useSelector } from "react-redux";
import actions from '../../../redux/users/actions';
import ShowPerPage from '../../common/ShowPerPage';
import TableSearch from '../../common/TableSearch';
import Pagination from '../../common/Pagination';
// Table data
export default function Content() {
    //initialize datatable
    const dispatch = useDispatch();
    const RegisteredUsers = useSelector(
        (state) => state.registeredUserReducer
    );
    console.log(RegisteredUsers.registeredUsers)
    useEffect(() => {
        dispatch({ type: actions.GET_ALL_USERS })
    }, [dispatch])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);



    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentdata = RegisteredUsers.registeredUsers.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumb />
                    <div className="ms-panel">
                        <div className="ms-panel-header">
                            <h6>Customer List</h6>
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
                                                            Customer ID
                                                        </th>
                                                        <th  >
                                                            Customer Name
                                                        </th>
                                                        <th  >
                                                            Location
                                                        </th>
                                                        <th  >
                                                            Email ID
                                                        </th>
                                                        <th >
                                                            Ordered Item
                                                        </th>
                                                        <th >
                                                            Bill
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentdata.map((user) =>
                                                        <tr >
                                                            <td>{user._id}</td>
                                                            <td><img className='Avatar' src={user.file} /></td>
                                                            <td>
                                                               { user.FlavorList.flavor1 }
                                                            </td>
                                                            <td>{user.PhoneNumber}</td>
                                                            <td> {user.UserName}</td>
                                                            <td>{user.Created_On}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <Pagination
                                        postsPerPage={postsPerPage}
                                        totalPosts={RegisteredUsers.registeredUsers.length}
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

