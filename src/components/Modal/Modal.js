import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log('Escape');
        this.props.onClose();
      }
    });
  }
  componentWillUnmount() {
    console.log('Modal componentWillMount');
  }
  render() {
    return createPortal(
      <Overlay>
        <ModalContent>
          {/* <img src="" alt="" /> */}
          {this.props.children}
        </ModalContent>
      </Overlay>,
      modalRoot,
    );
  }
}
