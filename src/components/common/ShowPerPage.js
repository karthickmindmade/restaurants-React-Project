import React from "react"
import { propTypes } from "react-bootstrap/esm/Image"
export default function ShowPerPage(props) {
    return (
        <div class="col-sm-12 col-md-6">
            <div class="dataTables_length" id="data-table-4_length">
                <label>{props.label}
                    <select name="data-table-4_length" onChange={props.onChange} aria-controls="data-table-4" class="custom-select custom-select-sm form-control form-control-sm">
                        {props.children}
                        {/* <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option> */}
                    </select> entries</label>
            </div>
        </div>
    )
}