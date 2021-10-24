import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Parallax from './Landing'
import E404 from './Error'

class Body extends Component {
  render() {
    return (
      <div>

        <Route exact path='/'>
          <Parallax />
        </Route>
        <Route path="">
          <E404 />
        </Route>

      </div>
    )
  }
}

export default Body