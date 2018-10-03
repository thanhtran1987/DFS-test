import { combineReducers } from 'redux';
import tileListReducer from './tileListReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
  tileList: tileListReducer,
  page: pageReducer,
});

export default rootReducer;
