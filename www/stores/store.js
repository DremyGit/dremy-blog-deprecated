import thunkMiddleware from 'redux-thunk'
import { createHistory } from 'history';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import blogReducers from '../reducers/BlogReducer';
import DevTools from '../components/dev/DevTools.jsx';

const reducer = combineReducers({
  router: routerStateReducer,
  blog: blogReducers
});


export default function configureStore(initialState) {
  const store = compose(
    reduxReactRouter({ createHistory }),
    applyMiddleware(thunkMiddleware),
    DevTools.instrument()
  )(createStore)(reducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers/BlogReducer.js', () => {
      const nextRootReducer = require('../reducers/BlogReducer.js')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}