import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';

const Audio = () => {
    return (
      <div>
        <Home />
        <h1>Audio</h1>
      </div>
    );
}

export default hot(module)(Audio);
