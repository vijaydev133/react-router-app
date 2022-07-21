import React from 'react'
import logo from './logo.svg';
import {NavLink} from "react-router-dom"
function Nav() {
  return (
    <nav>
        <img src={logo} alt="" width={"80px"}/>
        <ul>
            <li>
                <NavLink to = "/" style={({isActive})=> isActive ? {color:"red"} : null}>Home</NavLink>
            </li>
            <li>
                <NavLink to = "about" style={({isActive})=> isActive ? {color : "red"} : null}>About</NavLink>
            </li>
            <li>
                <NavLink to={"service"} style = {({isActive})=> isActive ? {color: "red"} : null}>Service</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav