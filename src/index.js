import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main'
import Result from './pages/result'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

