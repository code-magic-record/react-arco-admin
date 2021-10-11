import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './app/Home';
import Todo from './app/Todo';
import Message from './app/Message';
import PersonCenter from './app/PersonCenter';
import './index.less';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/todo">
          <Todo />
        </Route>
        <Route exact path="/message">
          <Message />
        </Route>
        <Route exact path="/personCenter">
          <PersonCenter />
        </Route>
        <Redirect path="/" to="/home" />
      </Switch>
    </Router>
  );
};
export default App;
