import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Entry from './pages/Entry'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import me from './mebutcropped.jpg'

function App() {
  return (
    <>
    <div className="header">
      <img src = {me}></img>
      <h3>biskoi</h3>
    </div>
    <Switch>
      <Route exact path = '/' component = {Entry}/>
    </Switch>
    </>
  );
}

export default App;
