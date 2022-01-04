import { Component } from 'react';
export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchKey !== this.props.searchKey) {
      //   console.log('prevProps.searchKey', prevProps.searchKey);
      //   console.log('this.props.searchKey', this.props.searchKey);
      this.setState({ loading: true });
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
        {loading && <h1>Loading...</h1>}
        {images && (
          <ul className="gallery">
            {images.map(image => (
              <li key={image.id} className="gallery-item">
                <img src={image.webformatURL} alt={image.pageURL} width={240} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
