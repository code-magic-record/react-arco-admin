import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './app/Home/Home.jsx';
import Todo from './app/Todo/Todo.jsx';
import Message from './app/Message/Message.jsx';
import PersonCenter from './app/PersonCenter/PersonCenter.jsx';
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
      </Switch>
    </Router>
  );
};
export default App;
