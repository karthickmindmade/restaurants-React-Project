import React, { useState } from "react"
import { propTypes } from "react-bootstrap/esm/Image"
export default function Dropdown(props) {
    const [show, setshow] = useState(false)
    return (
        <li className="menu-item">
            <div onClick={() => setshow(!show)}>
                {props.head}
            </div>
            <ul className={show === true ? "active collapse" : "collapse"}>
                {props.body}
            </ul>
        </li >
    )
}