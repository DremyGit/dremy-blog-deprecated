import React from 'react';

import Navigation from '../navigation/Navigation.jsx';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }

}