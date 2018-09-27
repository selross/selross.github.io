import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Home from './Home.js';
import CustomModal from './Modal';

const About = () => {
    return (
      <div>
        <Home />
        <CustomModal>
          <h1>About Selene</h1>
        </CustomModal>
      </div>
    );
}

export default hot(module)(About);
