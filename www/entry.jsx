import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import Router from './components/router/Router.jsx';


render(
  <Router />,
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