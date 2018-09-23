import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';

const Collaborations = () => {
    return (
      <div>
        <Home />
        <h1>Collaborations</h1>
      </div>
    );
}

export default hot(module)(Collaborations);
