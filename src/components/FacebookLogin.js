import React,{useState} from 'react'
import FacebookLogin from 'react-facebook-login';
import  { Redirect, useHistory } from "react-router-dom";
const FacebookLoginButton = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    let fbContent;
    const responseFacebook = (response) =>{
        setIsLogged(true);
    }
    const componentClicked = () =>{
        console.log("Clicked");
    }
    if(isLogged){
        return <Redirect to="/dashboard"/>
    }else{
        fbContent = (<FacebookLogin appId="225266602772646" autoLoad="true" fields="name, email" onClick={componentClicked} callback={responseFacebook}/>)
    }
    return (
        <div>
           {fbContent} 
        </div>
    )
}

export default FacebookLoginButton
