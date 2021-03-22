import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authorityReducer, sessionReducer, alertReducer, exampleReducer } from './reducers';

const rootReducer = combineReducers({
    authority: authorityReducer,
    session: sessionReducer,
    alert: alertReducer,
    example: exampleReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const getStore = (selector : any) : RootState => selector(((state: RootState) => state));

export type RootState = ReturnType<typeof rootReducer>;

export { store, getStore };
export default store;