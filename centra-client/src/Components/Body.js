import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Parallax from './NewLanding copy'
import About from './About'
import newLanding from './NewLanding'
import Email from './Email'

class Body extends Component {
  render () {
    return (
    <div>
    
    <Route  exact path='/' component={Parallax}/>
    <Route  exact path='/about' component={About}/>
    <Route  exact path='/new' component={newLanding}/>
    <Route  exact path='/mail' component={Email}/>
    </div>
    )
  }
}

export default Body