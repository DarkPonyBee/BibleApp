import {combineReducers} from 'redux';

import {reducer} from './app/reducers';

const rootReducer = combineReducers({
  appReducer: reducer,
});

export default rootReducer;
