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
import { Router, Route } from 'react-router';
import { store } from '../../stores/store';
import App from '../layout/layout.jsx';
import HomePage from '../homePage/HomePage.jsx';
import BlogListPage from '../blogListPage/BlogListPage.jsx';
import BlogDetailPage from '../blogDetailPage/BlogDetailPage.jsx';

import DevTools from '../dev/DevTools.jsx';

export default class DremyBlog extends React.Component {

  render() {

    console.log(this.props);

    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            <Route path="" component={App}>
              <Route path="/" component={HomePage} />
              <Route path="/blog" component={BlogListPage}/>
              <Route path="/blog/:id" component={BlogDetailPage} />
            </Route>
          </ReduxRouter>
          <DevTools />
        </div>
      </Provider>
    )
  }
}