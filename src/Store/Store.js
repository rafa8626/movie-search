import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import movieSearch from './Item/Item';

const rootReducer = combineReducers({
    movieSearch,
});

const middleware = [thunk];
middleware.push(createLogger());

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
