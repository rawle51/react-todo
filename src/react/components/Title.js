import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <header className="app-header">
    <h1 className="app-header__title">{title}</h1>
  </header>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default memo(Title);
