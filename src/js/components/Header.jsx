import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="app-header">
      <h1 className="app-header__title">{title}</h1>
    </header>
  );
};

export default Header;
