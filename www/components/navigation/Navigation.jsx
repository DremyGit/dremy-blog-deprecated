import React from 'react';
import { Link } from 'react-router';

require('./style.scss');

export default class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <div className="container">
          <span>Dremy 博客</span>
          <ul>
            <li><Link to="/" >首页</Link></li>
            <li><Link to="/blog" >博客</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}