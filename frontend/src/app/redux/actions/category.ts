import { Dispatch } from 'redux';
import * as api from '../../api/index';
import * as actionTypes from '../actionTypes';

export const fetchCategories = () => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.fetchCategories();
		dispatch({ type: actionTypes.FETCH_CATEGORIES, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createCategory = (body: CreateCategoryForm) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.createCategory(body);
		dispatch({ type: actionTypes.CREATE_CATEGORY, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updateCategory = (body: UpdateCategoryForm, id: number) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.updateCategory(body, id);
		dispatch({ type: actionTypes.UPDATE_CATEGORY, payload: data });
	} catch (error) {
		console.log(error);
	}
};
