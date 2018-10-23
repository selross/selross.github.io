import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';
import styled from 'styled-components';

import {ModalTitle, ModalContent} from './styled/ModalComponents'
import KALWIcon from '../static/icons/kalw.png';
import KitchenSistersIcon from '../static/icons/kitchensisters.png';
import NonprofitIcon from '../static/icons/nonprofit.png';
import ReplicantIcon from '../static/icons/replicant.png';
import RuseIcon from '../static/icons/ruse.png';
import WAMIcon from '../static/icons/wam.png';

const workItems = [
  {
    title: 'KALW',
    description: 'Reported and produced stories from pitch to air; fact-checked and researched stories',
    icon: KALWIcon,
  },
  {
    title: 'The Kitchen Sisters',
    description: 'Transcribes and edits raw tape into artfully scored, six-minute podcast episodes',
    icon: KitchenSistersIcon,
  },
  {
    title: 'Women\'s Audio Mission',
    description: 'Assisted with recording sessions and Girls on the Mic classes',
    icon: WAMIcon,
  },
  {
    title: 'Nonprofit work',
    description: 'Created, implemented, and monitored development policies and protocalls for Environmental Progress; edited and produced content for Berlin-based socio-political project Das Baumhaus',
    icon: NonprofitIcon,
  },
  {
    title: 'Ruse Laboratories',
    description: 'Coordinates projects of hacker-artist collective',
    icon: RuseIcon,
  },
  {
    title: 'Replicant',
    description: 'Voices an AI speech platform that allows machines to think and listen intelligently',
    icon: ReplicantIcon,
  },
];

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
            <ModalTitle>WORK</ModalTitle>
            {
              workItems.map(({title, description, icon}) => {
                return (<WorkListItem
                  key={title}
                  title={title}
                  description={description}
                  icon={icon}
                />);
              })
            }
          </ModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Work);
