import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

const modalStyle = {
  overlay: {},
  content : {
    margin: '0 auto',
    width: '50%',
    height: '70%'
  }
};

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.onEscape = this.onEscape.bind(this);
    this.navigateHome = this.navigateHome.bind(this);
    // this.state = {overlayRef: null};
  }

  navigateHome() {
    this.props.history.push('/');
  }

  onEscape(event) {
    if (event.keyCode === 27) {
      this.navigateHome();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscape, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape, false);
  }

  // TODO: make modal close on click outside
  // overlayRef={(ref) => this.setState({overlayRef: ref})}
  // componentDidUpdate() {
  //   const {overlayRef} = this.state;
  //   if (overlayRef) {
  //     overlayRef.addEventListener('click', () => {});
  //   }
  // }

  render() {
    return (
      <Modal
        isOpen={true}
        style={modalStyle}
      >
        <Link to="/">x</Link>
        {this.props.children}
      </Modal>
    );
  }
}

export default hot(module)(withRouter(CustomModal));
