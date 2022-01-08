import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import LoadingDots from '../Loader/Loader';
import { GalleryList } from './ImageGallery.styled';
import { fetchImages } from '../../services/apiPixabay';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchKey !== this.props.searchKey) {
      this.setState({ loading: true, images: null });

      fetchImages(this.props.searchKey, this.props.page)
        .then(data => {
          console.log(data.hits);
          return data.hits;
        })
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <>
        {loading && <LoadingDots />}
        {images && (
          <GalleryList>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                tags={image.tags}
                largeImageURL={image.largeImageURL}
                onSelect={this.props.onOpen}
              />
            ))}
          </GalleryList>
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
