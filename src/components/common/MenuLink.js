import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { Router } from "react-router-dom/esm/react-router-dom"
import { useHistory ,useLocation } from 'react-router-dom';
export default function MenuLink(props) {
    const [show, setshow] = useState(false)
   
const location = useLocation()


const history = useHistory()

    return (
        <Link className={history.location.pathname===props.to?`active ${props.className}`:props.className} to={props.to}>{props.children}</Link>
          
    )
}