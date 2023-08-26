import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import styled from 'styled-components';
import CustomModal from './Modal';
import {ModalTitle, ModalContent} from './styled/ModalComponents'
import HorizontalLine from '../static/horizontal-line.png';
import VerticalLine from '../static/vertical-line.png';
import copy from '../static/copy/contact.json';

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
`;

const ContactModalContent = styled(ModalContent)`
  margin: 20px 75px;
  height: 42vh;
`;

const ContactLine = styled.div`
  margin-bottom: 5px;
  margin-left: 100px;
`;

const GridLine = styled.img`
  height: 20px;
`;

const BlankGridLine = styled(GridLine)`
  margin-bottom: 17px;
`;

const MarginLine = styled.img`
  position: absolute;
  top: 0;
  margin-left: 30px;
`;

const Contact = () => {
    return (
      <div>
        <Home />
        <CustomModal>
        <MarginLine src={VerticalLine} />
          <ContactModalContent>
            <ModalTitle>Contact</ModalTitle>
            <ContactInfo>
              <GridLine src={HorizontalLine} />
              <ContactLine><strong>email:</strong> <a href="mailto:selross2@gmail.com">{copy.email}</a></ContactLine>
              <GridLine src={HorizontalLine} />
              <ContactLine>
                <a href={copy.air_link} target="_blank">
                  Air Member Directory
                </a>
              </ContactLine>
              <GridLine src={HorizontalLine} />
              <ContactLine>
                <a href={copy.linkedin_link} target="_blank">
                  LinkedIn
                </a>
              </ContactLine>
              <BlankGridLine src={HorizontalLine} />
              <BlankGridLine src={HorizontalLine} />
              <BlankGridLine src={HorizontalLine} />
            </ContactInfo>
          </ContactModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Contact);
