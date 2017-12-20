import { createStore } from 'redux';
import combineReducer from './combineReducer';

export default createStore(
  combineReducer
);
