import React,{useState} from 'react'
import {projectAuth} from "../firebase/config";
import {Redirect} from "react-router-dom"
const Rigister = () => {
    const [compo,setComp] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handdleChange = async (e) =>{
        e.preventDefault();
        console.log(name,email,password);
        if(email !=="" && password !==""){
            try{
            const user = await projectAuth.createUserWithEmailAndPassword(email,password);
            console.log(user);
            setComp(true);
            }catch(err){
                console.error(err);
            }
        }
    }
    if(compo){
        return(<Redirect to="/images"/>)
    }else{
    return (
        <div className="rigister">
                <form>
                    <label>Name</label>
                    <input  onChange={e => setName(e.target.value)} value={name} />
                    <label>Email</label>
                    <input onChange={e => setEmail(e.target.value)} value={email} />
                    <label>Password</label>
                    <input onChange={e => setPassword(e.target.value)} value={password} />
                    <input type="submit" onClick={handdleChange} />
                </form>
            </div>
        )
    }
}

export default Rigister
