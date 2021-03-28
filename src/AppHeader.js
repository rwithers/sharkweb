import React from 'react';
import logo from './shark-final-noweb.png';
import './App.css';

function AppHeader() {
    return (
        <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" width="764" height="343"/>
        </div>
        <div className="App-header-menu">
          <a className="App-header-menu-link" href="">NEWS.</a>
          <a className="App-header-menu-link" href="">ONAIR.</a>
          <a className="App-header-menu-link" href="">EVENTS.</a>
          <a className="App-header-menu-link" href="">PODCASTS.</a>
          <a className="App-header-menu-link" href="">SHOP.</a>
        </div>
      </header>
    );
}

export default AppHeader;