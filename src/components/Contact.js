import React from 'react'
import image from '../63a5e8ee8cdcfab2f952bcd46a73e5c4--mr-bean-profile-pictures.jpg';
import {BiPhoneCall} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {RiRadioButtonLine} from 'react-icons/ri';
const Contact = () => {
    return (
        <div style={{backgroundColor:"white", height:"40vh", display:"flex",justifyContent:"center", alignContent:"center"}}>
            <div>
            <img src={image} alt="Image" style={{height:"80px", width:"80px", borderRadius:"50%" ,marginTop:"50px"}}/>
            <h3>Amit Rg</h3>
            <h5><RiRadioButtonLine/>Offline</h5>
            <div>
            <button type="button" className="btn-blue" style={{height:"30px", padding:"5px", width:"60px"}}>
       <BiPhoneCall />
        Call
      </button>
      <button type="button" className="btn-blue" style={{height:"30px", padding:"5px", width:"100px", marginLeft:"10px"}}>
       <CgProfile />
        Profile
      </button>
            </div>
            </div>
        </div>
    )
}

export default Contact
