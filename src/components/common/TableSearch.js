import React from "react"
export default function TableSearch(props) {
    return (
        <div class="col-sm-12 col-md-6">
            <div id="data-table-4_filter" class="dataTables_filter">
                <label>{props.label}:
                    <input type={props.type} class="form-control form-control-sm" placeholder={props.placeholder} onChange={props.onChange} aria-controls="data-table-4" />
                </label>
            </div>
        </div>
    )
}