import { SET_USER, SET_ERORR } from "./Values";

export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_USER:
			return {
				...state,
				user: payload,
			};

		case SET_ERORR:
			return {
				...state,
				errr: payload,
			};
		default:
			return state;
	}
};
