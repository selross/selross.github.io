import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';
import {ModalTitle, ModalContent} from './styled/ModalComponents'
import styled from 'styled-components';
import KALWIcon from '../static/icons/kalw.png';

const AudioItemWrapper = styled.div`
  margin-bottom: 20px;
`;

// TODO: extract pink color to constant
const StoryTitle = styled.div`
  font-size: 20px;
  a {
    color: black;
    text-decoration: none;
  };
  a:hover {
    color: #dd9593;
  };
`;

const StoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StoryIcon = styled.img`
  height: 50px;
  border-radius: 50%;
  margin-right: 25px;
`;

const customModalStyle = {
  width: '60%'
};

const Audio = () => {
    return (
      <div>
        <Home />
        <CustomModal customStyle={customModalStyle}>
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
            <AudioItemWrapper>
              <StoryWrapper>
                <StoryIcon src={KALWIcon} />
                <div>
                  <StoryTitle>
                    <a href="http://www.kalw.org/post/riding-california-high-speed-rail-virtual-reality-0#stream/0" target="_blank">
                      People’s Open Net is internet for the people, by the people
                    </a>
                  </StoryTitle>
                </div>
              </StoryWrapper>
            </AudioItemWrapper>
            <AudioItemWrapper>
              <StoryWrapper>
                <StoryIcon src={KALWIcon} />
                <div>
                  <StoryTitle>
                    <a href="http://www.kalw.org/post/storycorps-just-so-you-know-i-m-transgender#stream/0" target="_blank">
                      StoryCorps: “Just so you know, I’m transgender”
                    </a>
                  </StoryTitle>
                </div>
              </StoryWrapper>
            </AudioItemWrapper>
          </ModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Audio);
