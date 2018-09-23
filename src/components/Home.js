import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import styled from 'styled-components';

import Bookends from '../static/bookends.png';
import Books from '../static/books.png';
import BotanicalPoster from '../static/botanical-poster.png';
import Envelope from '../static/envelope.png';
import EventPoster from '../static/event-poster.jpg';
import FramedPhoto from '../static/framed-photo.jpg';
import JewelryBox from '../static/jewelry-box.png';
import Laptop from '../static/laptop.png';
import Plant from '../static/plant.png';
import Polaroid from '../static/polaroid.png';
import Radio from '../static/radio.png';
import Tickets from '../static/tickets.png';

const Wrapper = styled.div``;

const ObjectWrapper = styled.div`
  position: absolute;
  width: 200px;
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
  left: 12%;
  top: 23%;
  width: 275px;
`;

const PosterWrapper = styled(ObjectWrapper)`
  left: 40%;
  top: 25%;
`;

const PolaroidWrapper = styled(ObjectWrapper)`
  left: 60%;
  top: 85%;
  width: 70px;
`;

const FramedPhotoWrapper = styled(ObjectWrapper)`
  left: 70%;
  top: 55%;
  width: 100px;
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
  left: 10%;
`;

const JewelryBoxWrapper = styled(ObjectWrapper)`
  left: 25%;
`;

const LaptopWrapper = styled(ObjectWrapper)`
  left: 45%;
  top: 15%;
`;

const EnvelopeWrapper = styled(ObjectWrapper)`
  left: 60%;
  width: 100px;
  bottom: 0px;
`;

const RadioWrapper = styled(ObjectWrapper)`
  left: 65%;
  width: 150px;
  bottom: 130px;
  z-index: 10;
`;

const PlantWrapper = styled(ObjectWrapper)`
  left: 70%;
  bottom: 44%;
  width: 250px;
  z-index: 0;
`;


class Home extends Component{
  render() {
    return (
      <Wrapper className="Home">
        <WallObjectsWrapper>
          <BotanicalPosterWrapper>
            <Image src={BotanicalPoster} />
          </BotanicalPosterWrapper>
          <PosterWrapper>
            <Link to="/collaborations">
              <Image src={EventPoster} />
            </Link>
          </PosterWrapper>
          <PolaroidWrapper>
            <Link to="/about">
              <Image src={Polaroid} />
            </Link>
          </PolaroidWrapper>
          <FramedPhotoWrapper>
            <Image src={FramedPhoto} />
          </FramedPhotoWrapper>
        </WallObjectsWrapper>
        <DeskObjectsWrapper>
          <Desk />
          <BookendsWrapper>
            <Image src={Bookends} />
          </BookendsWrapper>
          <JewelryBoxWrapper>
            <Image src={JewelryBox} />
          </JewelryBoxWrapper>
          <LaptopWrapper>
            <Link to="/work">
              <Image src={Laptop} />
            </Link>
          </LaptopWrapper>
          <EnvelopeWrapper>
            <Link to="/contact">
              <Image src={Envelope} />
            </Link>
          </EnvelopeWrapper>
          <RadioWrapper>
            <Link to="/audio">
              <Image src={Radio} />
            </Link>
          </RadioWrapper>
          <PlantWrapper>
            <Image src={Plant} />
          </PlantWrapper>
        </DeskObjectsWrapper>
      </Wrapper>
    );
  }
}

export default hot(module)(Home);
