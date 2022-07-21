import React from 'react'
import {useNavigate} from "react-router-dom"
function Subscribe() {
    let navigate = useNavigate()
  return (
    <div>
        <h1>successfully subscribed</h1>
        <h3>Subscribers discount details</h3>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <button onClick={()=>navigate("/")}>Unsubscribe</button>
    </div>
  )
}

export default Subscribe