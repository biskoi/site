import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Entry from './pages/Entry'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Nav from './Nav'

function App() {

  const [activeTab, setActiveTab] = useState('Home')

  return (
    <div className = 'main'>
      <>
      <Nav activeTab = {activeTab} setActiveTab = {setActiveTab}/>
      <div className = 'content'>
      <Switch>
        <Route exact path = '/' component = {Entry}/>
        <Route exact path = '/About' component = {About}/>
        <Route exact path = '/Contact' component = {Contact}/>
        <Route exact path = '/Portfolio' component = {Portfolio}/>
      </Switch>
      </div>
      </>
    </div>
  );
}

export default App;
