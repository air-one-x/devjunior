// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarTop from '../NavBarTop/navbartop.component';

// == Import
import './styles.css';
import Home from '../Home/home.component';
import Footer from '../Footer/footer.component';

// == Composant
const App = () =>{ 

  return(
  <div className="app">
    <NavBarTop />
    <main className="app--main">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </main>
    <Footer />

  </div>
);
}

// == Export
export default App;
