import React, { useContext, useEffect, useState } from "react";
import Login from "./Login";
import Rigister from "./Rigister";
import AuthContext from "../Auth/AuthContext";
import { Redirect } from "react-router-dom";

const Home = () => {
	const { user } = useContext(AuthContext);
	const [loged, setLoged] = useState(false);
	const [registered, setRigistered] = useState(false);
	useEffect(() => {
		if (user !== null) {
			setLoged(true);
		} else {
			setLoged(false);
		}
	}, [user]);

	if (loged) return <Redirect to="/images" />;
	return (
		<div>
			{!registered ? (
				<Login setRigistered={setRigistered} />
			) : (
				<Rigister setRigistered={setRigistered} />
			)}
		</div>
	);
};

export default Home;
