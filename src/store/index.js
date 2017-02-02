import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from 'reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ ...reducers })
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store;
