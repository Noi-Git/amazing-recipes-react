import React, { Component } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/recipes" exact component={Recipes}></Route>
            <Route path="/recipes/:id" component={SingleRecipe}></Route>
            <Route component={Default}></Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
