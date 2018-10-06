import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import pingEpic from './epics';
import dealsReducer, { dealEpic } from './app/deals/duck';

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({ dealsReducer });
export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(epicMiddleware, thunk),
  ));

  epicMiddleware.run(combineEpics(pingEpic, dealEpic));

  return store;
}
