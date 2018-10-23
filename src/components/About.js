import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Home from './Home.js';
import CustomModal from './Modal';
import {ModalTitle, ModalContent} from './styled/ModalComponents'
import Sel from '../static/sel.jpg';

const AboutModalContent = styled(ModalContent)`
  display: flex;
  a {
    color: #dd9593;
    text-decoration: none;
  }
`;

const BioImg = styled.img`
  height: 200px;
  margin: 10px 25px 25px 0px;
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
            <BioImg src={Sel} />
            <div>
              <Name>Selene Ross</Name> is an audio producer, musician and artist. She has worked on stories for Radiotopia's The Kitchen Sisters, NPR Member Station KALW, independent podcasts, and has helped people turn their original concepts into artistically produced audio stories. As a voice actor, she has voiced projects ranging from <a href='https://www.replicant.ai' target='_blank'>San Francisco start-up's</a> to <a href='https://polology.com/yes-the-church-of-google-exists/' target='_blank'>independent films</a>. Selene is based out of her hometown of Berkeley, CA, but lived previously in Berlin, Germany, where she organized and performed at poetry and <a href='https://amandasparish.com/2016/06/22/and-surrender/' target='_blank'>performance art exhibitions</a> and edited <a href='https://issuu.com/berlinspokenword/docs/unspokenvolume1' target='_blank'>Berlin's spoken word magazine</a>. She holds two B.A.’s in Environmental Studies and Sociology from the University of California, Santa Barbara.
            </div>
          </AboutModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(About);
