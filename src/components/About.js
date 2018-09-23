import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';

const About = () => {
    return (
      <div>
        <Home />
        <h1>About Selene</h1>
      </div>
    );
}

export default hot(module)(About);
