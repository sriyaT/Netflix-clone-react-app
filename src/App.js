import React from 'react';
import Main from './pages/index';
import { Switch, Route } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <Switch>
      <Route path='/' component={Main}></Route>
    </Switch>
  );
}

export default App;
