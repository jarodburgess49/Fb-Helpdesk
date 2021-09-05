import React from 'react'
import image from '../63a5e8ee8cdcfab2f952bcd46a73e5c4--mr-bean-profile-pictures.jpg';
import image2 from '../profile2.jpg'
const ChatBox = () => {
    return (
        <div className="chat-container">
            <div>
            <h2 style={{float:"left", backgroundColor:"white", }}>Amit Rg</h2>
            </div>
            <div style={{backgroundColor:"#EDEEEF", height:"100vh", position:"relative", width:"45vw"}} >
                <div style={{display:"flex"}}>
                <img src={image2} alt="Pic" style={{height:"40px", width:"40px",borderRadius:"50%", alignSelf:"center", padding:"10px"}}/>
                    
                    <p style={{backgroundColor:"white",borderRadius:"5px", marginLeft:"8px", padding:"9px", fontSize:"15px"}}>Hello from here</p>
                   
                </div>
                <h6 style={{float:"left", marginTop:"-8px", marginLeft:"62px"}}>Amit RG, March 05,2:22 AM</h6>
                <div style={{float:"right"}}>
                <p style={{backgroundColor:"white",borderRadius:"5px", marginLeft:"8px", padding:"9px", fontSize:"15px", marginRight:"60px"}}>We have three left in stock</p>
                <div style={{display:"flex"}}>
                    
                    <p style={{backgroundColor:"white",borderRadius:"5px", marginLeft:"8px", padding:"9px", fontSize:"15px"}}>If you order before 8pm, we can ship it then</p>
                    <img src={image} alt="Pic" style={{height:"40px", width:"40px",borderRadius:"50%", alignSelf:"center", padding:"10px"}}/>
                    
                </div>
                
                <h6 style={{float:"right", marginTop:"-8px",marginRight:"60px"}}>Richard Panel, March 05,2:22 AM</h6>

                </div>
                <input style={{position:"absolute", bottom:"50px", width:"95%",left:"10px", height:"3vh", borderRadius:"8px", borderColor:"#5DA3FA"}}></input>
            </div>
        </div>
    )
}

export default ChatBox
