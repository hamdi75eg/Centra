import React from "react";
import "./App.css";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'; import 'materialize-css'
import './CSS/tweaks.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'

import Parallax from './Components/Landing'
import E404 from './Components/Error'



function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Parallax />
            </Route>
            <Route path="*">
              <E404 />
            </Route>

          </Switch>

        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
