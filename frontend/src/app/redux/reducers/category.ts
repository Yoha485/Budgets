import { AnyAction } from '@reduxjs/toolkit';
import * as actionTypes from '../actionTypes';

const categoryReducer = (state: Category[] = [], action: AnyAction) => {
	switch (action.type) {
		case actionTypes.FETCH_CATEGORIES:
			return action?.payload;
		case actionTypes.CREATE_CATEGORY:
			return [...state, action?.payload];
		case actionTypes.UPDATE_CATEGORY:
			return state.map((category: Category) => (category.id === action.payload ? action.payload : category));
		default:
			return state;
	}
};

export default categoryReducer;
