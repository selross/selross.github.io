import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Audio from './components/Audio.js';
import Work from './components/Work.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/audio' component={Audio} />
      <Route path='/work' component={Work} />
      <Route path='/' component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
