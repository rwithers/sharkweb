import React from 'react';
import './App.css';
import AppHeader from './AppHeader.js';
import AppListenWidget from './AppListenWidget';
import AppFooter from './AppFooter.js';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppListenWidget/>
      <AppFooter/>
    </div>
  );
}

export default App;