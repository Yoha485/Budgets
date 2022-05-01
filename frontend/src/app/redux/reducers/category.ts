import { AnyAction } from '@reduxjs/toolkit';
import * as actionTypes from '../actionTypes';

const categoryReducer = (state: Category[] = [], action: AnyAction) => {
	switch (action.type) {
		case actionTypes.FETCH_CATEGORIES:
			return action?.payload;
		case actionTypes.CREATE_CATEGORY:
			return [...state, action?.payload];
		case actionTypes.UPDATE_CATEGORY:
			return state.filter((category: any) => {
				if (category.id === action.payload.id) {
					category.name = action.payload.name;
					return category;
				} else {
					return category;
				}
			});
		case actionTypes.CREATE_EXPENSE:
			return state.filter((category: any) => {
				if (category.id === action.payload.categoryId) {
					category.expenses.push(action.payload);
					category.overallCost = category.overallCost + action.payload.cost;
					return category;
				} else {
					return category;
				}
			});
		default:
			return state;
	}
};

export default categoryReducer;
