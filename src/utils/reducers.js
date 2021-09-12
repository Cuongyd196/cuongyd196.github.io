import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import reducerSaveID from 'reduxApp/PostDetail/detailReducer';
import history from 'utils/history';
import globalReducer from 'global.reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    postDetail: reducerSaveID,
    ...injectedReducers,
  });

  return rootReducer;
}
