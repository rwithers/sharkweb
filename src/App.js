import React from 'react';
import './App.css';
import AppHeader from './AppHeader.js';
import AppListenWidget from './AppListenWidget';
import AppBody from './AppBody';
import AppFooter from './AppFooter.js';
import ApplicationsWidget from './ApplicationsWidget.js';
import NewsWidget from './NewsWidget.js';
import OnAirWidget from './OnAirWidget.js';
import EventsWidget from './EventsWidget.js';
import PodcastsWidget from './PodcastsWidget.js';
import ShopWidget from './ShopWidget.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
          <AppHeader/>
          <AppListenWidget/>
          <Switch>
              <Route path="/applications">
                <ApplicationsWidget/>
              </Route>
              <Route path="/news">
                <NewsWidget />
              </Route>
              <Route path="/onair">
                <OnAirWidget/>
              </Route>
              <Route path="/events">
                <EventsWidget/>
              </Route>
              <Route path="/podcasts">
                <PodcastsWidget/>
              </Route>
              <Route path="/shop">
                <ShopWidget/>
              </Route>
              <Route path="/">
                <AppBody/>
              </Route>
            </Switch>
          <AppFooter/>
    </div>
    </Router>
  );
}

export default App;