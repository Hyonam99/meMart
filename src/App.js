import React from 'react'
import Navbar from './Navbar'
import Home from './Home';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Emen from './Emen';
import Emenf from './Emenf';

function App() {
  return(

    <Router>
      <section>
        <div className='header'>
          <Navbar />
        </div>

        <div className='other-content'>
          <Switch>

          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/Emen">
          <Emen />
          </Route>
          <Route path="/Emenf">
          <Emenf />
          </Route>

          </Switch>
          </div>
      </section>

    </Router>
  );
}

export default App