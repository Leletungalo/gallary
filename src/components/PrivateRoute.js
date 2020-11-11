import React,{useContext} from 'react';
import {Route,Redirect} from "react-router-dom";
import AuthContext from "../Auth/AuthContext"

const PrivateRoute = ({component:Component, ...rest}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <Route 
        {...rest}
        render={props => {
            if(user !== null){
                return  <Component {...props} /> 
            }else{
                return <Redirect to="/" />
            }
        }}
        />
    )
}

export default PrivateRoute
