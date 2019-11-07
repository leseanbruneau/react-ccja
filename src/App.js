import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from './context/context';

import Header from './components/Header'
//import Days from './components/Days'
import Sprints from './components/Sprints'
import About from './components/About'
import Resources from './components/Resources'
import ReactHelp from './components/ReactHelp'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  // Try sometime - Provider basename={process.env.PUBLIC_URL}
  return (
    <Provider>
      <div>
        <Router>
          <Header />
          <div className="pagetop">
            <Switch>
              <Route exact path="/" component= { Sprints } />
              <Route exact path="/reacthelp" component= { ReactHelp } />
              <Route exact path="/about" component= { About } />
              <Route exact path="/resources" component= { Resources } />
            </Switch>
          </div>
          
        </Router>

      </div>
    </Provider>
  );
}

export default App;
