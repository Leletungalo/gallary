import React, { useState, useContext } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import AuthContext from "../Auth/AuthContext";

const Rigister = ({ setRigistered }) => {
	const { signUp } = useContext(AuthContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handdleChange = async e => {
		e.preventDefault();
		console.log(name, email, password);
		if (email !== "" && password !== "") {
			signUp(email, password);
		}
	};
	const classes = useStayles();
	return (
		<div className="rigister">
			<form>
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
				<div className={classes.buttonWrap}>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => setRigistered(false)}
					>
						Alreay have Account
					</Button>
					<Button
						className={classes.register}
						variant="contained"
						color="secondary"
						onClick={handdleChange}
					>
						Submit
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

export default Rigister;
