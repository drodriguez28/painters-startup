import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Painters from './components/Painters';
import Clients from './components/Clients';
import Types from './components/Types';
import Header from './components/Header';
import CreatePainter from './components/Createpainter'



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/painter" component={Painters} />
          <Route exact path="/client" component={Clients} />
          <Route exact path="/type" component={Types} />
          <Route exact path="/painter/new" component={CreatePainter} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
