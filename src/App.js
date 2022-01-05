import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Div } from './App.styled';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
// import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    searchWord: '',
    // showModal: false,
  };
  handleFormSubmit = keyWord => {
    console.log(keyWord);
    this.setState({ searchWord: keyWord });
    console.log('searchWord', this.state.searchWord);
  };
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    // const { showModal } = this.state;
    return (
      <Div>
        <Toaster />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* {this.state.loading && <h1>Loading...</h1>} */}
        <ImageGallery
          searchKey={this.state.searchWord}
          selectedImage={this.state.selectedImage}
          onSelect={this.selectImage}
        />
        <Button />
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageGalleryItem onOpen={this.toggleModal} />
          </Modal>
        )} */}
      </Div>
    );
  }
}
