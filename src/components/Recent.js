import React from 'react'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import {GrRefresh} from 'react-icons/gr'
import Message from './RecentMessage';
const Recent = () => {
    return (
        <div className="recent-container">
           <div className="header-recent">
               <div style={{marginTop:"22px", marginRight:"10px"}}>
                <AiOutlineAlignLeft/>
                </div>
               <h3>Conversations</h3>
               <div style={{marginTop:"22px", marginRight:"10px", marginLeft:"18px"}}>
                <GrRefresh/>
                </div>
           </div>
           <Message/>
           

        </div>
    )
}

export default Recent
