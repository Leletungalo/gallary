import React,{useState,useContext} from 'react'
import {projectAuth} from "../firebase/config";
import {Redirect} from "react-router-dom";
import {Button,TextField, makeStyles} from "@material-ui/core";
import AuthContext from "../Auth/AuthContext";

const Rigister = () => {
    const {setUser} = useContext(AuthContext);    
    const classes = useStayles();
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
            setUser(user.user);
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
                <form className={classes.myform}>
                    <TextField 
                        color="secondary" 
                        label="Name" 
                        className={classes.input} 
                        onChange={e => setName(e.target.value)} 
                        value={name} 
                        variant="outlined"/>
                        
                    <TextField
                        label="Email"
                        color="secondary" 
                        className={classes.input} 
                        onChange={e => setEmail(e.target.value)} 
                        value={email} 
                        variant="outlined"/>
                    <TextField
                        color="secondary"
                        label="Password" 
                        className={classes.input} 
                        onChange={e => setPassword(e.target.value)} 
                        value={password} 
                        variant="outlined"/>
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
        backgroundColor: "back",
        fontSize: "1.3rem"
    }
}))

export default Rigister
