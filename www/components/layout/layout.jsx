import React from 'react';

import { connect } from 'react-redux';
import Navigation from '../navigation/Navigation.jsx';

class App extends React.Component {

  render() {
    const { ...props } = this.props
    return (
      <div>
        <Navigation />
        {React.cloneElement(this.props.children, { ...props})}
      </div>
    )
  }

}

export default connect(state => state)(App)