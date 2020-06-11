import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import './CSS/tweaks.css'
import Body from './Components/Body' 
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <NavBar></NavBar>
          <Body></Body>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
