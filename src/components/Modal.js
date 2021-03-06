import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Modal from 'react-modal';
import styled from 'styled-components';
import IconClose from '../static/icon-close.png';
import {createWiggle} from './styled/Wiggle';

Modal.setAppElement('#root');

const defaultModalStyle = {
  borderRadius: '0px',
  margin: '0 auto',
  width: '50%',
  maxHeight: '100%'
};

const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const wiggle = createWiggle(5);
const IconCloseImg = styled.img`
  ${wiggle}
  width: 30px;
`;

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.onEscape = this.onEscape.bind(this);
    this.navigateHome = this.navigateHome.bind(this);
    this.state = {overlayRef: null};
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscape, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape, false);
  }

  componentDidUpdate() {
    const {overlayRef} = this.state;
    if (overlayRef) {
      overlayRef.addEventListener('click', this.handleOverlayClick);
    }
  }

  // TODO: this is jank, make it better
  handleOverlayClick(event) {
    if (event.target.classList.contains('ReactModal__Overlay')) {
      this.navigateHome();
    }
  }

  navigateHome() {
    this.props.history.push('/');
  }

  onEscape(event) {
    if (event.keyCode === 27) {
      this.navigateHome();
    }
  }

  render() {
    const {customStyle} = this.props;
    const modalStyleCombined = {
      content: {...defaultModalStyle, ...customStyle}
    };

    return (
      <Modal
        isOpen={true}
        style={modalStyleCombined}
        overlayRef={(ref) => this.setState({overlayRef: ref})}
      >
        <ModalContent>
          {this.props.children}
          <Link to="/">
            <IconCloseImg src={IconClose} />
          </Link>
        </ModalContent>
      </Modal>
    );
  }
}

export default hot(module)(withRouter(CustomModal));
