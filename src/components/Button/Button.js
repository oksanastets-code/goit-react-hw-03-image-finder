// import { Component } from 'react';
// import PropTypes from 'prop-types';

// import { render } from "@testing-library/react";

import { ButtonLoadMore } from './Button.styled';
export default function Button({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
}
