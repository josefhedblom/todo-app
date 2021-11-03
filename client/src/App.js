import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import todo from './component/todo';
import login from './component/login/Login';
import register from './component/register';

import './App.css';

function App() {
  return (
    <Router>

    <div className="App">
      <header>
        HEJ
      </header>

      <Switch>
      <Route path="/todo" component={todo} />
      </Switch>

     
    </div>
    </Router>
  );
}

export default App;
