import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

const modalStyle = {
  content: {
    margin: '0 auto',
    width: '50%',
    height: '70%'
  }
};

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
    return (
      <Modal
        isOpen={true}
        style={modalStyle}
        overlayRef={(ref) => this.setState({overlayRef: ref})}
      >
        <div>
          <Link to="/">x</Link>
          {this.props.children}
        </div>
      </Modal>
    );
  }
}

export default hot(module)(withRouter(CustomModal));
