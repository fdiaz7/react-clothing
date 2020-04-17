import React from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';

const HastPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HastPage} />
      </Switch>
    </div>
  );
}

export default App;
