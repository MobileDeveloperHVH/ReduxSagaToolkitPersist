import {combineReducers} from 'redux';

import {counterReducer} from './counter/reducer';

const rootReducer = combineReducers({
  counterReducer,
  // TODO add more reducer
});

export default rootReducer;
