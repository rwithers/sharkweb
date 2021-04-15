import React from 'react';
import logo from './shark-final-noweb.png';
import './App.css';
import { Link } from "react-router-dom";

function AppHeader() {
    return (
        <header className="App-header">
        <div className="App-logo-container">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" width="764" height="343"/></Link>
        </div>
        <div className="App-header-menu">
          {/* <Link className="App-header-menu-link" to="/">HOME.</Link>
          <Link className="App-header-menu-link" to="/news">NEWS.</Link>
          <Link className="App-header-menu-link" to="/onair">ONAIR.</Link>
          <Link className="App-header-menu-link" to="/events">EVENTS.</Link>
          <Link className="App-header-menu-link" to="/podcasts">PODCASTS.</Link>
          <Link className="App-header-menu-link" to="/shop">SHOP.</Link>  */}
        </div>
        <div className="ListenLive">
                <a href="http://lightningstream.com/player.aspx?call=KYRK-FM" target="_blank" rel="noopener noreferrer">
                <img src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/518/2019/03/18142401/button_listenlive-2019.png" alt="" width="150" height="48" />
                </a>
        </div>
      </header>
    );
}

export default AppHeader;