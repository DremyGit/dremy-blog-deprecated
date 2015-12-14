import React from 'react';
import { render } from 'react-dom';
import blogApp from './reducers/BlogReducer';
import APP from './components/router/Router.jsx';
//import BlogListPage from './components/blogListPage/BlogListPage.jsx';


render(
  <APP />,
  document.getElementById('app')
)


(function(global) {
  var console_log = global.console.log
  global.console.log = function() {
    if (!(
        arguments.length == 1 &&
        typeof arguments[0] === 'string' &&
        arguments[0].match(/^\[(HMR|WDS)\]/)
      )) {
      console_log.apply(global.console,arguments)
    }
  }
})(window)