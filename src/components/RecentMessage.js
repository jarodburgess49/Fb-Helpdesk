import React from 'react'
import "../App.css";
import {RiCheckboxBlankLine} from 'react-icons/ri'
const RecentMessage = () => {
    return (
        <div style={{display:"flex",flexDirection:"column", backgroundColor:"#EDEEEF", padding:"15px", marginTop:"12px"}}>
            <div style={{display:"flex" , marginLeft:"60px" , justifyContent:"space-between"}}>
                <div style={{display:"flex"}}> 
                <div style={{marginRight:"10px"}}><RiCheckboxBlankLine/></div>
                <div>
                <div>Amit Rg</div>
                <div>Facebook</div>
                </div>
                </div>
                <div style={{float:"right"}}>10m</div>
                
            </div>
            <div style={{marginTop:"5px"}}>
                <div>Hello , something imp</div>

            </div>
        </div>
    )
}

export default RecentMessage
