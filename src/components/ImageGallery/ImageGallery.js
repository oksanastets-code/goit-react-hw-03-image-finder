import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    showModal: false,
    selectedImage: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchKey !== this.props.searchKey) {
      //   console.log('prevProps.searchKey', prevProps.searchKey);
      //   console.log('this.props.searchKey', this.props.searchKey);
      this.setState({ loading: true, images: null });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchKey}&page=1&key=24206659-085fc8a8bf5db593be5a49f71&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(r => {
          if (r.ok) {
            return r.json();
          }
          return Promise.reject(new Error('No images found'));
        })
        .then(data => {
          console.log(data.hits);
          return data.hits;
        })
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  selectImage = (url, name) => {
    this.setState({ selectedImage: url });
    console.log('вибрали картинку', name);
    this.toggleModal();
  };
  render() {
    const { images, loading, showModal } = this.state;
    return (
      <>
        {loading && <h1>Loading...</h1>}
        {images && (
          <GalleryList>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                pageURL={image.pageURL}
                largeImageURL={image.largeImageURL}
                onSelect={this.selectImage}
              />
            ))}
          </GalleryList>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageGalleryItem />
          </Modal>
        )}
      </>
    );
  }
}
GalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
