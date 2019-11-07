import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import painter from './components/.js'
import './App.css';
import Painters from './components/HelloWorld.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path="/painter" component={Painters}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
