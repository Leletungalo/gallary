import React,{useState,useContext} from 'react'
import {projectAuth} from "../firebase/config";
import {Redirect} from "react-router-dom";
import {Button,TextField, makeStyles} from "@material-ui/core"
import AuthContext from "../Auth/AuthContext";
const Login = () => {
    const {setUser} = useContext(AuthContext);
    const [logedIn,setlogedIn] = useState(false);
    const [loginEmail,setloginEmail] = useState("");
    const [loginPassword,setloginPassword] = useState("");
    const classes = useStayles();

    const handdleChange = async (e) =>{
        e.preventDefault();
        console.log(loginEmail,loginPassword);
        if(loginEmail !=="" && loginPassword !==""){
            try{
                const user = await projectAuth.signInWithEmailAndPassword(loginEmail,loginPassword);
                console.log(user.user);
                setUser(user.user);
                setlogedIn(true);
            }catch(err){
                console.error(err);
            }
        }
    }

    projectAuth.onAuthStateChanged(user => {
        if(user){
            console.log(user);
            setlogedIn(true);
        }
    })

    if(logedIn){
        return(<Redirect to="/images"/>)
    }else{
    return (
        <div className="rigister">
                <form className={classes.myform} >
                    <TextField 
                    color="secondary" 
                    label="Email"  
                    className={classes.input} 
                    type="email" 
                    onChange={e => setloginEmail(e.target.value)} 
                    value={loginEmail} />
                    <TextField 
                    label="Password"
                    color="secondary" 
                    type="password"
                    className={classes.input} 
                    onChange={e => setloginPassword(e.target.value)} 
                    value={loginPassword} />
                    <Button variant="contained" color="secondary" onClick={handdleChange} >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

const useStayles = makeStyles((theme) => ({
    myform:{
        padding: "1em",
        backgroundColor: "#3F51B5"
    },
    input:{
        backgroundColor: "white",
        fontSize: "1.3rem"
    }
}))

export default Login
