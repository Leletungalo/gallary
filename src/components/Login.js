import React, { useState, useContext } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import AuthContext from "../Auth/AuthContext";
const Login = ({ setRigistered }) => {
	const { login } = useContext(AuthContext);
	const [loginEmail, setloginEmail] = useState("");
	const [loginPassword, setloginPassword] = useState("");

	const handdleChange = async e => {
		e.preventDefault();
		if (loginEmail !== "" && loginPassword !== "") {
			login(loginEmail, loginPassword);
		}
	};

	const classes = useStayles();
	return (
		<div className="rigister">
			<form>
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
				<div className={classes.buttonWrap}>
					<Button
						variant="contained"
						color="secondary"
						onClick={handdleChange}
					>
						Submit
					</Button>
					<Button
						className={classes.register}
						variant="contained"
						color="secondary"
						onClick={() => setRigistered(true)}
					>
						Rigister
					</Button>
				</div>
			</form>
		</div>
	);
};

const useStayles = makeStyles({
	buttonWrap: {
		position: "relative",
		padding: "0.5em",
	},
	register: {
		position: "absolute",
		top: "0.5em",
		right: "0.5em",
	},
});
export default Login;
