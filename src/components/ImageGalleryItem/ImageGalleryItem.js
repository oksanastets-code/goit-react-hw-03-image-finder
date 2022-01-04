import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ webformatURL, pageURL }) {
  return (
    <GalleryItem>
      <GalleryItemImage src={webformatURL} alt={pageURL} />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  pageURL: PropTypes.string.isRequired,
};
