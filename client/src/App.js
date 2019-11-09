import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Painters from './components/Painters';
import Clients from './components/Clients';
import Types from './components/Types';
import Header from './components/Header';
import CreatePainter from './components/Createpainter';
import CreateClient from './components/Createclient';
import CreateType from './components/Createtype';
import PainterDetails from './components/PainterDetails'




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/painters/:id" component={PainterDetails} />
          <Route exact path="/painters" component={Painters} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/types" component={Types} />
          <Route exact path="/painter/new" component={CreatePainter} />
          <Route exact path="/client/new" component={CreateClient} />
          <Route exact path="/type/new" component={CreateType} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
