import { Dispatch } from 'redux';
import * as api from '../../api/index';
import * as actionTypes from '../actionTypes';

export const createExpense = (body: CreateExpenseForm) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.createExpense(body);
		dispatch({type: actionTypes.CREATE_EXPENSE, payload: data});
	} catch (error) {
		alert('Invalid Data')
		console.log(error);
	}
};
