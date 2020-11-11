import React,{useState,useContext} from 'react'
import {Button,TextField} from "@material-ui/core";
import AuthContext from "../Auth/AuthContext";
const Login = ({setRigistered}) => {
    const { login} = useContext(AuthContext);
    const [loginEmail,setloginEmail] = useState("");
    const [loginPassword,setloginPassword] = useState("");

    const handdleChange = async (e) =>{
        e.preventDefault();
        if(loginEmail !=="" && loginPassword !==""){
            login(loginEmail,loginPassword);
        }
    }
    return (
        <div className="rigister">
            {/*errr && 
                <Typography 
                    className="errMessage"
                    variant="h6"
                >{errr}</Typography>*/}
                <form  >
                    <TextField 
                        className="inputs" 
                        color="secondary" 
                        label="Email"  
                        autoComplete="true"
                        type="email" 
                        onChange={e => setloginEmail(e.target.value)} 
                        value={loginEmail} 
                    />
                    <TextField 
                        className="inputs" 
                        label="Password"
                        color="secondary" 
                        type="password"
                        onChange={e => setloginPassword(e.target.value)} 
                        value={loginPassword}
                    />
                    <div className="buttonwrap">
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={handdleChange} >
                            Submit
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => setRigistered(true)} >
                            Rigister
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
export default Login
