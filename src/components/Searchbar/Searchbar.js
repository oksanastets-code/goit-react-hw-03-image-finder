import { Component } from 'react';
import toast from 'react-hot-toast';
export default class Searchbar extends Component {
  state = {
    keyWord: '',
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.keyWord.trim() === '') {
      const notify = 'Please, enter keyword for searching.';
      toast.error(notify);
      return;
    }
    this.props.onSubmit(this.state.keyWord);
    this.setState({ keyWord: '' });
  };
  handleKeyWordChange = e => {
    this.setState({ keyWord: e.currentTarget.value.toLowerCase() });
    console.log(this.state.keyWord);
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleKeyWordChange}
          />
        </form>
      </header>
    );
  }
}
