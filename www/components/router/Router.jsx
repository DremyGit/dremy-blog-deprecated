import {
  ReduxRouter,
  reduxReactRouter,
  routerStateReducer
} from 'redux-router';
import {
  createStore,
  compose,
  combineReducers
} from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../layout/layout.jsx';
import HomePage from '../homePage/HomePage.jsx';
import BlogListPage from '../blogListPage/BlogListPage.jsx';
import BlogDetailPage from '../blogDetailPage/BlogDetailPage.jsx';
import DevTools from '../dev/DevTools.jsx';
import configureStore from '../../stores/store';

export default class DremyBlog extends React.Component {

  render() {

    let store = configureStore()

    console.log(this.props);

    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            <Route path="/" component={App}>
              <IndexRoute component={HomePage} />
              <Route path="blog" component={BlogListPage}/>
              <Route path="blog/:title" component={BlogDetailPage} />
              <Route path="blog/page/:page" component={BlogListPage}/>
            </Route>
          </ReduxRouter>
          <DevTools />
        </div>
      </Provider>
    )
  }
}