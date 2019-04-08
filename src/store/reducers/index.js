import { combineReducers } from "redux";
import errorReducer from './errorReducer';
import paginationReducer from './paginationReducer';
import showReducer from './showReducer';
import sortReducer from './sortReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    errors: errorReducer,
    pagination: paginationReducer,
    shows: showReducer,
    sorting: sortReducer,
    search: searchReducer
});
