import { combineReducers } from 'redux';
import auth from './auth';
import menu from './menu';

const reducer = combineReducers({ auth, menu });

export default reducer;