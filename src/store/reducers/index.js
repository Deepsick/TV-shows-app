import { combineReducers } from "redux";
import errorReducer from './errorReducer';
import paginationReducer from './paginationReducer';
import showReducer from './showReducer';
import sortReducer from './sortReducer';

export default combineReducers({
    errors: errorReducer,
    pagination: paginationReducer,
    shows: showReducer,
    sorting: sortReducer
});
