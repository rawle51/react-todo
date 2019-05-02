import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, type, icon, children }) => (
  <button className={className} onClick={onClick} type={type}>
    {icon ?
      <i className="material-icons">{icon}</i> :
      children
    }
  </button>
);

Button.defaultProps = {
  className: '',
  icon: null,
  children: null,
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
