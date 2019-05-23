import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import movies from './Movie/Movie';

const rootReducer = combineReducers({
    movies,
});

const middleware = [thunk];
middleware.push(createLogger());

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
