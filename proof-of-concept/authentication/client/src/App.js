import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';

import './styles/global.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/register-success">
          <RegisterSuccess />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
