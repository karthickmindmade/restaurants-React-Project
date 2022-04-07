import React, { useState } from "react"

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