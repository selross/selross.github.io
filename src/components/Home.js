import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import styled from 'styled-components';

import Bookends from '../static/bookends.png';
import Books from '../static/books.png';
import BotanicalPoster from '../static/botanical-poster.png';
import Envelope from '../static/envelope.png';
import EventPoster from '../static/event-poster.png';
import FramedPhoto from '../static/framed-photo.png';
import FramedPhoto2 from '../static/framed-photo-2.png';
import Laptop from '../static/laptop.png';
import Plant from '../static/plant.png';
import Plant2 from '../static/plant-2.png';
import Polaroid from '../static/polaroid.png';
import Radio from '../static/radio.png';
import Tickets from '../static/tickets.png';
// import JewelryBox from '../static/jewelry-box.png';
// <JewelryBoxWrapper>
//   <Image src={JewelryBox} />
// </JewelryBoxWrapper>

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
  left: 15%;
  top: 27%;
  width: 320px;
`;

const PosterWrapper = styled(ObjectWrapper)`
  left: 42%;
  top: 25%;
  width: 180px;
`;

const PolaroidWrapper = styled(ObjectWrapper)`
  left: 52%;
  top: 117%;
  width: 60px;
`;

const FramedPhotoWrapper = styled(ObjectWrapper)`
  left: 61.5%;
  top: 33%;
  width: 92px;
`;

const FramedPhoto2Wrapper = styled(ObjectWrapper)`
  left: 62%;
  top: 78%;
  width: 85px;
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
  left: 28%;
  width: 175px;
`;

const Plant2PlantWrapper = styled(ObjectWrapper)`
  left: 15%;
  top: 3%;
  width: 173px;
`;

const LaptopWrapper = styled(ObjectWrapper)`
  left: 40%;
  top: 15%;
  width: 240px;
`;

const EnvelopeWrapper = styled(ObjectWrapper)`
  left: 60%;
  width: 95px;
  bottom: 50px;
`;

const RadioWrapper = styled(ObjectWrapper)`
  left: 60%;
  width: 120px;
  bottom: 150px;
`;

const PlantWrapper = styled(ObjectWrapper)`
  left: 65%;
  bottom: 50%;
  width: 230px;
`;


class Home extends Component {
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
          <FramedPhoto2Wrapper>
            <Image src={FramedPhoto2} />
          </FramedPhoto2Wrapper>
        </WallObjectsWrapper>
        <DeskObjectsWrapper>
          <Desk />
          <Plant2PlantWrapper>
            <Image src={Plant2} />
          </Plant2PlantWrapper>
          <BookendsWrapper>
            <Image src={Bookends} />
          </BookendsWrapper>
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
