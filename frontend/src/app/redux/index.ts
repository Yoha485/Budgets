import { combineReducers } from 'redux';
import user from './reducers/user';
import categories from './reducers/category'

export default combineReducers({
	user,
	categories
});
