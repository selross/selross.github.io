import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import styled from 'styled-components';
import {createWiggle} from './styled/Wiggle';
import HamburgerMenu from './HamburgerMenu';

import Bookends from '../static/bookends.png';
import Books from '../static/books.png';
import BotanicalPoster from '../static/botanical-poster.png';
import Envelope from '../static/envelope.png';
import FramedPhoto2 from '../static/framed-photo-2.png';
import FramedPhoto3 from '../static/framed-photo-3.png';
import FramedPhoto4 from '../static/framed-photo-4.png';
import FramedPhoto5 from '../static/framed-photo-5.png';
import Laptop from '../static/laptop.png';
import Plant from '../static/plant.png';
import Plant2 from '../static/plant-2.png';
import Plant3 from '../static/plant-3.png';
import Plant4 from '../static/plant-4.png';
import Polaroid from '../static/polaroid.png';
import Radio from '../static/radio.png';
import Tickets from '../static/tickets.png';

const Wrapper = styled.div``;

const ObjectWrapper = styled.div`
  position: absolute;
  width: 200px;
`;

const wiggle = createWiggle(1.5);
const SelectableObjectWrapper = styled(ObjectWrapper)`
  ${wiggle}
`;

const Image = styled.img`
  width: 100%;
`;

const WallObjectsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  top: 0%;
`;

const BotanicalPosterWrapper = styled(ObjectWrapper)`
  left: 25%;
  top: 22%;
  width: 320px;
  @media only screen and (max-width: 1200px) {
    left: 16%;
  }
`;

const PolaroidWrapper = styled(SelectableObjectWrapper)`
  left: 45%;
  top: 103%;
  width: 60px;
`;

const FramedPhoto2Wrapper = styled(ObjectWrapper)`
  left: 59%;
  top: 94%;
  width: 85px;
  @media only screen and (max-width: 1200px) {
    left: 62%;
  }
`;

const FramedPhoto5Wrapper = styled(ObjectWrapper)`
  left: 59%;
  top: 49%;
  width: 92px;
  @media only screen and (max-width: 1200px) {
    left: 61.5%;
  }
`;

const FramedPhoto4Wrapper = styled(ObjectWrapper)`
  left: 52%;
  top: 49%;
  width: 92px;
`;

const FramedPhoto3Wrapper = styled(ObjectWrapper)`
  left: 52%;
  top: 94%;
  width: 92px;
`;


const DeskObjectsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  top: 50%;
`;

const Desk = styled.div`
  width: 100%;
  height: 2px;
  z-index: 0;
  background: black;
  position: absolute;
  top: 35%;
`;

const BookendsWrapper = styled(ObjectWrapper)`
  left: 65%;
  width: 175px;
`;

const LaptopWrapper = styled(SelectableObjectWrapper)`
  left: 40%;
  top: 15%;
  width: 240px;
`;

const EnvelopeWrapper = styled(SelectableObjectWrapper)`
  left: 59%;
  width: 95px;
  bottom: 16%;
  @media only screen and (max-width: 1200px) {
    left: 67%;
  }
`;

const Plant2Wrapper = styled(ObjectWrapper)`
  left: 77%;
  top: 5%;
  width: 163px;
`;

const PlantWrapper = styled(ObjectWrapper)`
  left: 18%;
  bottom: 50%;
  width: 230px;
`;

const Plant3Wrapper = styled(ObjectWrapper)`
  left: 60%;
  top: 12%;
  width: 62px;
`;

const Plant4Wrapper = styled(ObjectWrapper)`
  left: 56%;
  top: 22%;
  width: 62px;
`;

const RadioWrapper = styled(SelectableObjectWrapper)`
  left: 34%;
  width: 120px;
  bottom: 150px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
    this.handleClick = this.handleClick.bind(this);
  }

  // TODO: there is probably a better way of doing this
  handleClick(e) {
    let currentNode = e.target;
    if (currentNode.id === "hamburger-menu") {
      return;
    }
    while (currentNode.parentElement) {
      if (currentNode.parentElement.id === "hamburger-menu") {
        return;
      }
      currentNode = currentNode.parentElement;
    }
    this.setState({menuOpen: false});
  }

  render() {
    return (
      <Wrapper className="Home" onClick={this.handleClick}>
        <HamburgerMenu isOpen={this.state.menuOpen} />
        <WallObjectsWrapper>
          <BotanicalPosterWrapper>
            <Image src={BotanicalPoster} />
          </BotanicalPosterWrapper>
          <PolaroidWrapper>
            <Link to="/about">
              <Image src={Polaroid} />
            </Link>
          </PolaroidWrapper>
          <FramedPhoto2Wrapper>
            <Image src={FramedPhoto2} />
          </FramedPhoto2Wrapper>
          <FramedPhoto3Wrapper>
            <Image src={FramedPhoto3} />
          </FramedPhoto3Wrapper>
          <FramedPhoto4Wrapper>
            <Image src={FramedPhoto4} />
          </FramedPhoto4Wrapper>
          <FramedPhoto5Wrapper>
            <Image src={FramedPhoto5} />
          </FramedPhoto5Wrapper>
        </WallObjectsWrapper>
        <DeskObjectsWrapper>
          <Desk />
          <RadioWrapper>
            <Link to="/audio">
              <Image src={Radio} />
            </Link>
          </RadioWrapper>
          <Plant4Wrapper>
            <Image src={Plant4} />
          </Plant4Wrapper>
          <Plant3Wrapper>
            <Image src={Plant3} />
          </Plant3Wrapper>
          <EnvelopeWrapper>
            <Link to="/contact">
              <Image src={Envelope} />
            </Link>
          </EnvelopeWrapper>
          <BookendsWrapper>
            <Image src={Bookends} />
          </BookendsWrapper>
          <Plant2Wrapper>
            <Image src={Plant2} />
          </Plant2Wrapper>
          <PlantWrapper>
            <Image src={Plant} />
          </PlantWrapper>
          <LaptopWrapper>
            <Link to="/work">
              <Image src={Laptop} />
            </Link>
          </LaptopWrapper>
        </DeskObjectsWrapper>
      </Wrapper>
    );
  }
}

export default hot(module)(Home);
