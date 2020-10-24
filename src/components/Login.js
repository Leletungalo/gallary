import React,{useState} from 'react'
import {projectAuth} from "../firebase/config";
import {Redirect} from "react-router-dom";

const Login = () => {
    const [logedIn,setlogedIn] = useState(false);
    const [loginEmail,setloginEmail] = useState("");
    const [loginPassword,setloginPassword] = useState("");

    const handdleChange = async (e) =>{
        e.preventDefault();
        console.log(loginEmail,loginPassword);
        if(loginEmail !=="" && loginPassword !==""){
            try{
            const user = await projectAuth.signInWithEmailAndPassword(loginEmail,loginPassword);
            console.log(user);
            setlogedIn(true);
            }catch(err){
                console.error(err);
            }
        }
    }
    if(logedIn){
        return(<Redirect to="/images"/>)
    }else{
    return (
        <div className="rigister">
                <form>
                    <label>Email</label>
                    <input type="email" onChange={e => setloginEmail(e.target.value)} value={loginEmail} />
                    <label>Password</label>
                    <input onChange={e => setloginPassword(e.target.value)} value={loginPassword} />
                    <input type="password" type="submit" onClick={handdleChange} />
                </form>
            </div>
        )
    }
}

export default Login
