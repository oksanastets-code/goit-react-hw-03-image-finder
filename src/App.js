import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from './components/Searchbar/Searchbar';

export default class App extends Component {
  state = {
    searchWord: '',
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      fetch(
        'https://pixabay.com/api/?q=cat&page=1&key=24206659-085fc8a8bf5db593be5a49f71&image_type=photo&orientation=horizontal&per_page=12',
      )
        .then(r => r.json())
        .then(images => this.setState({ images }))
        .finally(() => this.setState({ loading: false }));
    }, 5000);
  }
  handleFormSubmit = keyWord => {
    console.log(keyWord);
    this.setState({ searchWord: keyWord });
    console.log('searchWord', this.state.searchWord);
  };
  render() {
    return (
      <div>
        <Toaster />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <h1>Loading...</h1>}
        {/* {this.state.images && <div>{ this.state.images}</div>} */}
      </div>
    );
  }
}
