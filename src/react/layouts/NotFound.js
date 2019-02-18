import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="not-found">
    <h1 className="error__title error__title--big">Oops, you are on the wrong way...</h1>
    <Link to="/" className="start-page__btn link link--shadow">Start page</Link>
  </div>
);
