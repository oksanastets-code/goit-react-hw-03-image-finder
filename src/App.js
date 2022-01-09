import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Div } from './App.styled';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
// import { fetchImages } from '../services/apiPixabay';

export default class App extends Component {
  state = {
    searchWord: '',
    // page: 1,
    showModal: false,
    modalImage: null,
    modalAlt: null,
  };
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.page !== this.state.page) {
    //   ImageGallery.getImages();
    // }
    console.log('update');
  }
  componentDidMount(selectedImage, selectedAlt) {
    // this.setState({ modalImage: selectedImage, modalAlt: selectedAlt });
    //   console.log('modalImage', selectedImage)
    //   this.toggleModal();
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }

  handleFormSubmit = keyWord => {
    this.setState({ searchWord: keyWord });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // onLoadMoreClick = () => {
  //   this.setState(({ page }) => ({
  //     page: page + 1,
  //   }));
  // };
  onOpenLargeImage = (selectedImage, selectedAlt) => {
    this.setState({ modalImage: selectedImage, modalAlt: selectedAlt });
    console.log('modalImage', selectedImage);
    this.toggleModal();
  };

  render() {
    const { showModal, modalImage, modalAlt, showLoadMoreBtn } = this.state;
    return (
      <Div>
        <Toaster />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchKey={this.state.searchWord}
          // selectedImage={this.state.selectedImage}
          // onSelect={this.selectImage}

          onOpen={this.onOpenLargeImage}
        />
        {/* {showLoadMoreBtn && <Button />} */}
        {/* <Button onClick={this.onLoadMoreClick} /> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt={modalAlt} />
          </Modal>
        )}
      </Div>
    );
  }
}
