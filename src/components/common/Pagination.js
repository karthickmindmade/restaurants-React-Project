import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
<div></div>
            <div class="col-sm-12 col-md-5">
                <div class="dataTables_info" id="data-table-4_info" role="status" aria-live="polite">
                    Showing 1 to 10 of 36 entries
                </div>
            </div>
            <div class="col-sm-12 col-md-7">
                <div class="dataTables_paginate paging_simple_numbers" id="data-table-4_paginate">
                    <ul class="pagination">
                        <li class="paginate_button page-item previous disabled" id="data-table-4_previous">
                            <a href="#" aria-controls="data-table-4" data-dt-idx="0" tabindex="0" class="page-link">
                                Previous
                            </a>
                        </li>
                        <li class="paginate_button page-item active">
                            <a href="#" aria-controls="data-table-4" data-dt-idx="1" tabindex="0" class="page-link">
                                1
                            </a>
                        </li>
                        <li class="paginate_button page-item ">
                            <a href="#" aria-controls="data-table-4" data-dt-idx="2" tabindex="0" class="page-link">
                                2
                            </a>
                        </li>
                        <li class="paginate_button page-item ">
                            <a href="#" aria-controls="data-table-4" data-dt-idx="3" tabindex="0" class="page-link">
                                3
                            </a>
                        </li>
                        <li class="paginate_button page-item ">
                            <a href="#" aria-controls="data-table-4" data-dt-idx="4" tabindex="0" class="page-link">
                                4
                            </a>
                        </li>
                        <li class="paginate_button page-item next" id="data-table-4_next">
                            <a href="#" aria-controls="data-table-4" data-dt-idx="5" tabindex="0" class="page-link">
                                Next
                            </a>
                        </li>
                    </ul>
                </div>
            </div>




            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} class={currentPage === number ? "pagination-link pagination-active " : "pagination-link"}>
                        <a onClick={() => paginate(number)} href='#' >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;