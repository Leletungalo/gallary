import React, { useReducer, useEffect } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { projectAuth } from "../firebase/config";
import { SET_USER, SET_ERORR } from "./Values";
const AuthState = props => {
	const inincialState = {
		user: null,
		errr: "",
	};
	const [state, disparch] = useReducer(AuthReducer, inincialState);

	useEffect(() => {
		const unsub = projectAuth.onAuthStateChanged(user => {
			disparch({
				type: SET_USER,
				payload: user,
			});
		});
		return () => unsub();
	}, []);

	const login = async (email, password) => {
		try {
			const user = await projectAuth.signInWithEmailAndPassword(
				email,
				password
			);
			disparch({
				type: SET_USER,
				payload: user,
			});
		} catch (err) {
			console.error(err);
			alert(err.message);
			disparch({
				type: SET_ERORR,
				payload: err.message,
			});
		}
	};

	const signUp = async (email, password) => {
		try {
			const user = await projectAuth.createUserWithEmailAndPassword(
				email,
				password
			);
			disparch({
				type: SET_USER,
				payload: user,
			});
		} catch (err) {
			console.error("my err", err.message);
			alert(err.message);
		}
	};

	const setUser = user =>
		disparch({
			type: SET_USER,
			payload: user,
		});

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				err: state.err,
				login,
				signUp,
				setUser,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
