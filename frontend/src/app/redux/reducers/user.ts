import { AnyAction } from 'redux';
import * as actionTypes from '../actionTypes';

const userReducer = (state: UserState | null = null, action: AnyAction) => {
	switch (action.type) {
		case actionTypes.AUTH:
			localStorage.setItem('user', JSON.stringify({ ...action?.data.user }));
			return { ...state, ...action?.data };
		case actionTypes.LOGOUT:
			localStorage.clear();
			return null;
		default:
			return state;
	}
};

export default userReducer;
