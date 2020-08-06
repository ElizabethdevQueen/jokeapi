import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import Categories from './Jokes/Categories';
import Joke from './Jokes/Joke';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Categories />
      </header>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/jokes/:category" component={Joke} exact />
      </Switch>
    </Router>
  )
}

export default MainApp;
