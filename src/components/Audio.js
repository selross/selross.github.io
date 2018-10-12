import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';
import {ModalTitle, ModalContent} from './styled/ModalComponents'
import styled from 'styled-components';

const AudioItemWrapper = styled.div`
  margin-bottom: 20px;
`;

const Audio = () => {
    return (
      <div>
        <Home />
        <CustomModal>
          <ModalContent>
            <ModalTitle>Audio</ModalTitle>
            <AudioItemWrapper>
              <iframe
                width="100%"
                height="100"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/483476799&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            </AudioItemWrapper>
            <AudioItemWrapper>
              <iframe
                width="100%"
                height="100"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/483452679&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            </AudioItemWrapper>
            <AudioItemWrapper>
              <iframe
                width="100%"
                height="200"
                frameBorder="no"
                src="https://www.npr.org/player/embed/647329067/647329068" />
            </AudioItemWrapper>
              <a href="http://www.kalw.org/post/people-s-open-net-internet-people-people#stream/0">
                People's Open Net
              </a>
            <AudioItemWrapper>
            <AudioItemWrapper>
              <a href="http://www.kalw.org/post/riding-california-high-speed-rail-virtual-reality-0#stream/0">
                high speed rail VR
              </a>
            </AudioItemWrapper>
              <a href="http://www.kalw.org/post/storycorps-just-so-you-know-i-m-transgender#stream/0">
                storycorps
              </a>
            </AudioItemWrapper>
            <AudioItemWrapper>
            </AudioItemWrapper>
          </ModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Audio);
