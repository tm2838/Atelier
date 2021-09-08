import React from 'react';
import { connect } from 'react-redux';
import { exampleActionCreator } from '../actions/placeholder'

class App extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.placeholder}</h1>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App);