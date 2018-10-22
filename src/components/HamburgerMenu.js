import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from '../static/hamburger.png';

// TODO: learn about stacking contexts for the love of god jenny
const MenuWrapper = styled.div`
  position: absolute;
  width: 35px;
  margin: 15px;
  z-index: 100;
  cursor: pointer;
`;

const MenuImg = styled.img`
  width: 100%;
`;

const MenuContent = styled.div`
  font-family: 'Josefin Slab', serif;
  font-size: 20px;
  margin-top: 5px;
  a {
    color: black;
    text-decoration: none;
  }
`;

const MenuLink = styled.div`
  padding: 10px 0px;
`;


export default class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const {isOpen} = this.state;
    return (
      <MenuWrapper onClick={this.toggleMenu}>
        <MenuImg src={Hamburger} />
        {isOpen &&
          <MenuContent>
            <MenuLink>
              <Link to="/about">About</Link>
            </MenuLink>
            <MenuLink>
              <Link to="/work">Work</Link>
            </MenuLink>
            <MenuLink>
              <Link to="/audio">Audio</Link>
            </MenuLink>
            <MenuLink>
              <Link to="/contact">Contact</Link>
            </MenuLink>
          </MenuContent>
        }
      </MenuWrapper>
    );
  }
}
