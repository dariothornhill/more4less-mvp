import { createStore, applyMiddleware, combineReducers} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { pingEpic } from './epics';
import pingReducer from './reducers/pingpong';
import categoriesReducer from './reducers/categories';
import productsReducer from './reducers/products';
import thunk from 'redux-thunk';

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({pingReducer, categoriesReducer, productsReducer});
export default function configureStore() {

    const store = createStore( rootReducer, composeWithDevTools(
        applyMiddleware(epicMiddleware,  thunk ))
    );

    epicMiddleware.run(pingEpic);

    return store;
}

