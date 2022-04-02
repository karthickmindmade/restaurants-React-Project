import React from "react"

export default function SelectOption(props) {
    const { option } = props
    return (
        <div className={props.divClassName} >
            {option.map((value) =>
                <div className="display-flex">
                    <div className={props.className}>{value}</div><button className='btn-secondary' value={value} onClick={props.deleteFun}>X</button>
                </div>
            )}
        </div>

    )
}