import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Div } from './App.styled';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    searchWord: '',
    showModal: false,
    modalImage: null,
    modalAlt: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchWord, modalImage, modalAlt } = this.state;
    if (prevState.searchWord !== searchWord) {
      this.setState({ searchWord: searchWord });
    }
    // if (prevState.modalImage !== modalImage) {
    //   this.setState({ modalImage: modalImage })
    // }
  }
  // componentDidMount(selectedImage, selectedAlt) {
  //   this.setState({ modalImage: selectedImage, modalAlt: selectedAlt });
  //     console.log('modalImage', selectedImage)
  //     this.toggleModal();
  // }

  handleFormSubmit = keyWord => {
    console.log(keyWord);
    this.setState({ searchWord: keyWord });
    console.log('searchWord', this.state.searchWord);
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenLargeImage = (selectedImage, selectedAlt) => {
    this.setState({ modalImage: selectedImage, modalAlt: selectedAlt });
    console.log('modalImage', selectedImage);
    this.toggleModal();
  };

  render() {
    const { showModal, modalImage, modalAlt } = this.state;
    return (
      <Div>
        <Toaster />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* {this.state.loading && <h1>Loading...</h1>} */}
        <ImageGallery
          searchKey={this.state.searchWord}
          // selectedImage={this.state.selectedImage}
          // onSelect={this.selectImage}
          onOpen={this.onOpenLargeImage}
        />
        <Button />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt={modalAlt} />
          </Modal>
        )}
      </Div>
    );
  }
}
