import { NavigateFunction } from 'react-router-dom';
import { Dispatch } from 'redux';
import * as api from '../../api/index';
import * as actionTypes from '../actionTypes';

export const signIn =
	(formData: AuthFormData, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
		try {
			const { data } = await api.signIn(formData);

			dispatch({ type: actionTypes.AUTH, data });
			navigate('/main');
		} catch (error) {
			console.log(error);
		}
	};

export const signUp =
	(formData: AuthFormData, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
		try {
			const { data } = await api.signUp(formData);

			dispatch({ type: actionTypes.AUTH, data });
			navigate('/main');
		} catch (error) {
			console.log(error);
		}
	};

export const logout = (navigate: NavigateFunction) => async (dispatch: Dispatch) => {
  try {
    dispatch({type: actionTypes.LOGOUT});
    navigate('/auth');
  } catch (error) {
    console.log(error);
  }
}
