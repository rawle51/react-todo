import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer.jsx';

function NotFound() {
  return(
    <div className="not-found">
      <h1 className="error__title error__title--big">Oops, you are on the wrong way...</h1>
      <Link to="/" className="start-page__btn link link--shadow">Start page</Link>
      <Footer />
    </div>
  );
}

export default NotFound;
