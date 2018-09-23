import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';

const Contact = () => {
    return (
      <div>
        <Home />
        <h1>Contact</h1>
      </div>
    );
}

export default hot(module)(Contact);
