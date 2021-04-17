import { createStore, combineReducers } from 'redux';
import todoReducer from './reducer';


const reducer = combineReducers({
    todoReducer
  })

const store = createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;