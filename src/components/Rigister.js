import React,{useState,useContext} from 'react';
import {Button,TextField, Typography} from "@material-ui/core";
import AuthContext from "../Auth/AuthContext";

const Rigister = () => {
    const {signUp} = useContext(AuthContext);  
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errr, setErrr] = useState("");
    
    const handdleChange = async (e) =>{
        e.preventDefault();
        console.log(name,email,password);
        if(email !=="" && password !==""){
           signUp(email,password);
        }
    }

    return (
        <div className="rigister">
            {errr && 
                <Typography
                    className="errMessage"
                    variant="h6"
                >{errr}</Typography>}
                <form >
                    <TextField
                        className="inputs" 
                        color="secondary" 
                        label="Name" 
                        onChange={e => setName(e.target.value)} 
                        value={name} 

                        />
                        
                    <TextField
                        className="inputs"
                        label="Email"
                        color="secondary" 
                        onChange={e => setEmail(e.target.value)} 
                        value={email} 
                        />
                    <TextField
                        className="inputs"
                        color="secondary"
                        label="Password" 
                        onChange={e => setPassword(e.target.value)} 
                        value={password} 
                        />
                    <div className="buttonwrap">
                        <Button variant="contained" color="secondary" onClick={handdleChange} >
                            Submit
                        </Button>
                    </div>
            </form>
        </div>
    )}

export default Rigister