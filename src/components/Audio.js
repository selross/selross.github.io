import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';

const Audio = () => {
    return (
      <div>
        <Home />
        <CustomModal>
          <h1>Audio</h1>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Audio);
