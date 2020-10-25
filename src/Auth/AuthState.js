import React,{useReducer} from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {SET_USER} from "./Values"
const AuthState = props =>{
    const inincialState = {
        user:null,
        email:""
    }
    
    const [state, disparch] = useReducer(AuthReducer,inincialState);

    const setUser = (user) => disparch({
        type: SET_USER,
        payload: user
    })
    
    return (<AuthContext.Provider
        value={{
            user: state.user,
            email: state.email,
            setUser
        }}
    >
        {props.children}
    </AuthContext.Provider>)

}
export default AuthState;