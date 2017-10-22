import React, { Component } from 'react'
// import { Link } from 'react-router'
// import { Home } from './pages/HomePage'

export default class Root extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
