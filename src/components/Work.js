import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';

const Work = () => {
    return (
      <div>
        <Home />
        <h1>Work</h1>
      </div>
    );
}

export default hot(module)(Work);
