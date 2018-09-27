import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';

const Contact = () => {
    return (
      <div>
        <Home />
        <CustomModal>
          <h1>Contact</h1>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Contact);
