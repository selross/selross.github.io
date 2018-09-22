import React, {Component} from 'react';
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

const Wrapper = styled.div`
`;

const DeskObjectsWrapper = styled.div`
  position: absolute;
  width: 70%;
  left: 20%;
  top: 50%;
`;

const BookendsWrapper = styled.div`
  position: absolute;
  left: 0px;
  width: 200px;
`;

const BookendsImage = styled.img`
  width: 100%;
`;

const JewelryBoxWrapper = styled.div`
  position: absolute;
  left: 20%;
  width: 200px;
`;

const JewelryBoxImage = styled.img`
  width: 100%;
`;

const LaptopWrapper = styled.div`
  position: absolute;
  left: 70%;
  width: 200px;
`;

const LaptopImage = styled.img`
  width: 100%;
`;

class App extends Component{
  render(){
    return(
      <Wrapper className="App">
        <DeskObjectsWrapper>
          <BookendsWrapper>
            <BookendsImage src={Bookends} />
          </BookendsWrapper>
          <JewelryBoxWrapper>
            <JewelryBoxImage src={JewelryBox} />
          </JewelryBoxWrapper>
          <LaptopWrapper>
            <LaptopImage src={Laptop} />
          </LaptopWrapper>
        </DeskObjectsWrapper>
      </Wrapper>
    );
  }
}

export default hot(module)(App);
