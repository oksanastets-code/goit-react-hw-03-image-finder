import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatURL,
  pageURL,
  onSelect,
  largeImageURL,
  selectedImage,
}) {
  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        alt={pageURL}
        onClick={() => onSelect(largeImageURL, pageURL)}
        // selected={selectedImage === largeImageURL}
      />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  pageURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};
