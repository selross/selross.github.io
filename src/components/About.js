import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Home from './Home.js';
import CustomModal from './Modal';
import {ModalTitle, ModalContent} from './styled/ModalComponents'

const About = () => {
    return (
      <div>
        <Home />
        <CustomModal>
          <ModalContent>
            <ModalTitle>Selene</ModalTitle>
            <div>
              AND Surrender: exhibition at SomoS Gallery by C H A N N E L Berlin
              Disappearrer: The Lost Works (exhibition at Mindscape Gallery, Moabit)
              Perserverance at the Japanese American National Museum: Installation Assistant
              Berlin Unspoken
              The Nocturnists
            </div>
          </ModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(About);
