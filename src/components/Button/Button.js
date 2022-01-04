// import { Component } from 'react';
// import PropTypes from 'prop-types';

// import { render } from "@testing-library/react";

import { ButtonLoadMore } from './Button.styled';
export default function Button() {
  return (
    <ButtonLoadMore type="button" className="btn btn-primary button" data-action="load-more">
      <span
        className="spinner-border spinner-border-sm spinner is-hidden"
        role="status"
        aria-hidden="true"
      ></span>

      <span className="label">Load more</span>
    </ButtonLoadMore>
  );
}
