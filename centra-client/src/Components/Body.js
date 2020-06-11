import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Parallax from './Parallax'
import About from './About'
class Body extends Component {
  render () {
    return (
    <div>
    
    <Route  exact path='/' component={Parallax}/>
    <Route  exact path='/about' component={About}/>
    </div>
    )
  }
}

export default Body