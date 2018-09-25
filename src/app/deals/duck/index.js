import dealsReducer from './reducers';
import { Types as dealsTypes } from './actions';

export { default as dealsOperations, dealEpic } from './operations';
export { dealsTypes };
export default dealsReducer;
