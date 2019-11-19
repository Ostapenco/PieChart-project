import { combineReducers } from 'redux';
import partnersReducer from './partnersReducer';

export default combineReducers({
  partnerList: partnersReducer
});
