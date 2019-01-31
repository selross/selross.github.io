import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';
import {ModalTitle, ModalContent} from './styled/ModalComponents'
import styled from 'styled-components';
import copy from '../static/copy/audio.json'

const AudioItemWrapper = styled.div`
  margin-bottom: 30px;
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

const AudioWrapper = styled.div`
  margin-left: 25px;
`;

const Audio = () => {
    return (
      <div>
        <Home />
        <CustomModal customStyle={customModalStyle}>
          <ModalContent>
            <ModalTitle>Audio</ModalTitle>
              {
                copy.audio_list.map(({type, content}, idx) => {
                  return (
                    <AudioItemWrapper key={idx}>
                      {type === 'iframe' && <div ref={(ref) => {
                        if (ref) {
                          ref.innerHTML = content.iframe
                        }
                      }}/>}
                      {type === 'link' && <StoryWrapper>
                        <StoryIcon src={`/src/static/icons/${content.icon_file_name}`} />
                        <div>
                          <StoryTitle>
                            <a href={content.link} target="_blank">
                              {content.title}
                            </a>
                          </StoryTitle>
                        </div>
                      </StoryWrapper>}
                      {type === 'embedded_file' && <StoryWrapper>
                        <StoryIcon src={`/src/static/icons/${content.icon_file_name}`} />
                        <StoryTitle>{content.title}</StoryTitle>
                        <AudioWrapper>
                          <audio controls>
                            <source src={`/src/static/${content.file_name}`} type={content.file_type}/>
                            Your browser does not support the audio element.
                          </audio>
                        </AudioWrapper>
                      </StoryWrapper>}
                    </AudioItemWrapper>
                  );
                })
              }
          </ModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Audio);
