import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';

const Work = () => {
    return (
      <div>
        <Home />
        <CustomModal>
          <h1>Work</h1>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Work);
