import { Component } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

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
    // console.log(this.state.keyWord);
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleKeyWordChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
