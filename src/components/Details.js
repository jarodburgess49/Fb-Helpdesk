import React from 'react'

const Details = () => {
    return (
        <div>
            <div style={{backgroundColor:"white", width:"90%", marginLeft:"12px" , borderRadius:"10px"}}>
            <h3 >Customer Details</h3>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <h4 style={{color:"grey"}}>Email</h4>
                <h4>amitrg@gmail.com</h4>
            </div>
            <div style={{display:"flex",justifyContent:"space-around", marginLeft:"-22px"}}>
                <h4 style={{color:"grey"}}>First Name</h4>
                <h4>Amit</h4>
            </div>
            <div style={{display:"flex",justifyContent:"space-around", marginLeft:"-25px"}}>
                <h4 style={{color:"grey"}}>Last Name</h4>
                <h4>Rg</h4>
            </div>
            <h4 style={{color:"blue", padding:"5px", float:"left"}}>View more Details</h4>
            </div>
        </div>
    )
}

export default Details
