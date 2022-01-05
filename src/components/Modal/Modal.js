import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Escape');
      this.props.onClose();
    }
  };
  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalContent>
          {/* <img src="" alt="" /> */}
          {this.props.children}
        </ModalContent>
      </Overlay>,
      modalRoot,
    );
  }
}
