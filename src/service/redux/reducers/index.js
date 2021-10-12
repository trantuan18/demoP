import { combineReducers } from 'redux';

import ChangeValueReducers from './ChangeValueReducers';

const reducers = combineReducers({
  RCount: ChangeValueReducers
});

export default reducers;