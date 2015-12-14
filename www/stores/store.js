import { createHistory } from 'history';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import { createStore, compose, combineReducers } from 'redux';

import blogReducers from '../reducers/BlogReducer';
import DevTools from '../components/dev/DevTools.jsx';

const reducer = combineReducers({
  router: routerStateReducer,
  blog: blogReducers
});

export const store = compose(
  reduxReactRouter({ createHistory }),
  DevTools.instrument()
)(createStore)(reducer);