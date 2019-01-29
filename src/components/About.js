import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Home from './Home.js';
import CustomModal from './Modal';
import {ModalTitle, ModalContent} from './styled/ModalComponents'
import Sel from '../static/sel.png';
import copy from '../static/copy/about.json'

const AboutModalContent = styled(ModalContent)`
  display: flex;
  a {
    color: #dd9593;
    text-decoration: none;
  }
`;

const BioImg = styled.img`
  height: 200px;
  margin: 10px 0px 10px 10px;
  border-radius: 50%;
`;

const Name = styled.span`
  font-size: 30px;
`;

const About = () => {
    return (
      <div>
        <Home />
        <CustomModal>
          <AboutModalContent>
            <div>
              <Name>{copy.name} </Name>
              <span ref={(ref) => {
                if (ref) {
                  ref.innerHTML = copy.bio_html
                }
              }} />
            </div>
            <BioImg src={Sel} />
          </AboutModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(About);
