import React from 'react';
import { Link } from 'react-router';

import './style.scss';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const navStyle = {
      visibility: this.props.leftNavShow ? 'visible' : 'hidden'
    }
    console.log(navStyle);

    return (
      <nav style={navStyle}>
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