import { combineReducers } from 'redux';
import contentsReducer from './contents_reducer';

const rootReducer = combineReducers({
  contents: contentsReducer
});

export default rootReducer;