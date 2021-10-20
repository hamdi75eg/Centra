import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Parallax from './Landing'
import Email from './Email'

class Body extends Component {
  render () {
    return (
    <div>
    
    <Route  exact path='/' component={Parallax}/>
    <Route  exact path='/mail' component={Email}/>
    </div>
    )
  }
}

export default Body