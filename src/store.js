import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { pingEpic } from './epics';
import categoriesReducer from './reducers/categories';
import dealsReducer from './app/deals/duck';
import thunk from 'redux-thunk';

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({ categoriesReducer, dealsReducer });
export default function configureStore() {

    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(epicMiddleware, thunk))
    );

    epicMiddleware.run(pingEpic);

    return store;
}

