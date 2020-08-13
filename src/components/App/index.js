// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarTop from '../NavBarTop/navbartop.component';

// == Import
import './styles.css';
import Home from '../Home/home.component';

// == Composant
const App = () => (
  <div className="app">
    <NavBarTop />
    <main className="app--main">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </main>

  </div>
);

// == Export
export default App;
