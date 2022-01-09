import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import LoadingDots from '../Loader/Loader';
import Button from '../Button/Button';
import { GalleryList } from './ImageGallery.styled';
import { fetchImages } from '../../services/apiPixabay';

export default class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchKey !== this.props.searchKey || prevState.page !== this.state.page) {
      // this.setState({ loading: true, images: null });
      this.setState({ loading: true });
      fetchImages(this.props.searchKey, this.state.page)
        .then(data => {
          console.log(data.hits);
          return data.hits;
        })
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
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
        <Button onClick={this.onLoadMoreClick} />
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
