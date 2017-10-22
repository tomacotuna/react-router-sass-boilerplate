import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <h2>Welcome to Home</h2>
        <p> <Link to='/sdf'> Press me! </Link></p>
      </div>
    )
  }
}

export default Home
