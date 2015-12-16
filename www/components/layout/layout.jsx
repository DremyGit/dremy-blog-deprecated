import React from 'react';
import { connect } from 'react-redux';

import './style.scss';
import Navigation from '../navigation/Navigation.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      leftNavShow: false
    }
  }

  render() {
    const { ...props } = this.props;
    const navState = {
      display: this.state.leftNavShow ? 'block' : 'none'
    }
    return (
      <div>
        <Navigation leftNavShow={this.state.leftNavShow} />
        <div id="dark" style={navState} onClick={this.hideLeftNav.bind(this)}></div>
        <button onClick={this.showLeftNav.bind(this)}>三</button>
        <div key={this.props.router.location.pathname}>
          {React.cloneElement(this.props.children, { ...props })}
        </div>
      </div>
    )
  }

  showLeftNav() {
    this.setState({leftNavShow:true});
  }

  hideLeftNav() {
    if (this.state.leftNavShow) {
      this.setState({leftNavShow: false});
    }
  }
}

export default connect(state => state)(App)