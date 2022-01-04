import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ id, webformatURL, pageURL }) {
  return (
    <GalleryItem key={id} className="gallery-item">
      <GalleryItemImage src={webformatURL} alt={pageURL} />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  pageURL: PropTypes.string.isRequired,
};
