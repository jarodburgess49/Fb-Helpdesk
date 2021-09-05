import React from 'react'
import "../App.css";
import Sidebar from '../components/Sidebar';
import Recent from '../components/Recent';
import Chat from '../components/ChatBox';
import Profile from '../components/Profile';
const Main = () => {
    return (
        <div className="container">
            <Sidebar/>
            <Recent/>
            <Chat/>
            <Profile/>
        </div>
    )
}

export default Main
