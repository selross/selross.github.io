import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';
import styled from 'styled-components';

import {ModalTitle, ModalContent} from './styled/ModalComponents'
import copy from '../static/copy/work.json';

const WorkListItemWrapper = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const WorkListItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkListItemIcon = styled.img`
  height: 70px;
  border-radius: 50%;
  margin-right: 25px;
`;

const WorkListItemTitle = styled.div`
  font-size: 24px;
`;

const WorkListItemDescription = styled.div`
  font-size: 16px;
`;

const WorkListItem = ({title, description, icon}) => {
  return (
    <WorkListItemWrapper>
      <WorkListItemIcon src={icon} />
      <WorkListItemText>
        <WorkListItemTitle>
          {title}
        </WorkListItemTitle>
        <WorkListItemDescription>
          {description}
        </WorkListItemDescription>
      </WorkListItemText>
    </WorkListItemWrapper>
  )
}

const customStyle = {
  width: '70%'
};

const Work = () => {
    return (
      <div>
        <Home />
        <CustomModal customStyle={customStyle}>
          <ModalContent>
            <ModalTitle>PROJECTS</ModalTitle>
            {
              copy.work_list.map(({title, description, icon_file_name}) => {
                return (<WorkListItem
                  key={title}
                  title={title}
                  description={description}
                  icon={`/src/static/icons/${icon_file_name}`}
                />);
              })
            }
          </ModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Work);
