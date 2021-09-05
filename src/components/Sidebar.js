import React from 'react'
import "../App.css";
import logo from '../High-Res-Logo-Icon-Blue.png';
import {BiMessageDetail} from 'react-icons/bi';
import image from '../63a5e8ee8cdcfab2f952bcd46a73e5c4--mr-bean-profile-pictures.jpg';

const Sidebar = () => {
    return (
        <div className="sidenav">
            <div style={{ marginTop: "35px", marginLeft: "15px", height: "10px", width:"10px" }}>
        <img className="crystyl-logo" src={logo} alt="logo" />
      </div>
      <div style={{ marginTop: "90px", marginLeft: "21px", height: "10px", width:"10px" }}>
       <h1> <BiMessageDetail color="white"/></h1>
      </div>

      <div style={{ marginTop: "90px", marginLeft: "21px", height: "10px", width:"10px" }}>
       <img src={image} alt="image" style={{height:"40px", width:"40px", borderRadius:"50%" , position:"absolute", bottom:"0", marginBottom:"30px"}}/>
      </div>

            
        </div>
    )
}

export default Sidebar
