import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./../Styles/globalStyles";
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";

export default function App(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [image,setImage]=useState("");
    const [isDisabled,setIsDisabled]=useState(false);

    function doLogin(e){
        e.preventDefault();
        setIsDisabled(true);
        setEmail("");
        setPassword("");
        alert("login okay");
    }

    function doSignUp(e){    
        e.preventDefault();
        setIsDisabled(true);
        
        if(!isImgLink(image)){
            return alert("Insira um link de uma imagem válida!");
        }
        
        setEmail("");
        setPassword("");
        setName("");
        setImage("");
        
    }

    function isImgLink(url){
        if(typeof(url) !== 'string') return false;
           return(url.match(/^http[^?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
    }

    return (
        <>
            <GlobalStyle/> 
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} doSignUp={doSignUp} doLogin={doLogin} isDisabled={isDisabled}/>}/>
                        <Route path="/cadastro" element={<SignUp email={email} setEmail={setEmail} password={password} setPassword={setPassword} doLogin={doLogin} doSignUp={doSignUp} name={name} setName={setName}  image={image} setImage={setImage} isDisabled={isDisabled}/>}/>
                    </Routes>
                </BrowserRouter>
        </>
    )
}