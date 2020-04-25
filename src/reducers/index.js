import { combineReducers } from 'redux';
import acceptRejectReducer from './acceptRejectReducer';

export default combineReducers({
  acceptReject: acceptRejectReducer
});
