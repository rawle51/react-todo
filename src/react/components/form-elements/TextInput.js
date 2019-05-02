import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, className, name, value, onChange }) => (
  <input
    id={id}
    className={className}
    name={name}
    onChange={onChange}
    value={value}
    type="text"
    autoComplete="off"
  />
);

TextInput.defaultProps = {
  id: null,
  className: '',
  name: null,
};

TextInput.propTypes = {
  id: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
