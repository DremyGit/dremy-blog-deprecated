import React from 'react';
import { Router, Route } from 'react-router';
import HomePage from '../homePage/HomePage.jsx';
import Layout from '../layout/layout.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import BlogListPage from '../blogListPage/BlogListPage.jsx';
import BlogDetailPage from '../blogDetailPage/BlogDetailPage.jsx';

export default class App extends React.Component {

  render() {

    Array;

    return (
      <Router history={createBrowserHistory({queryKey: false})}>
        <Route path="" component={Layout}>
          <Route path="/" component={HomePage} />
          <Route path="/blog" component={BlogListPage} />
          <Route path="/blog/:id" component={BlogDetailPage} />
        </Route>
      </Router>
    )
  }
}