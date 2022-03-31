import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, PreviouPage, NextPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <div className='row'>
                <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="data-table-4_info" role="status" aria-live="polite">
                        Showing 10 of {totalPosts} entries
                    </div>
                </div>
                <div class="col-sm-12 col-md-7">
                    <div class="dataTables_paginate paging_simple_numbers" id="data-table-4_paginate">
                        <ul class="pagination">
                            {pageNumbers.map(number => (
                                <li key={number} class={currentPage === number ? "paginate_button page-item active " : "paginate_button page-item"}>
                                    <a onClick={() => paginate(number)} href="#" aria-controls="data-table-4" data-dt-idx="1" tabindex="0" class="page-link" >
                                        {number}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Pagination;