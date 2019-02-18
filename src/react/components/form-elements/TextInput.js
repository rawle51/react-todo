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

TextInput.propTypes = {
  id: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // temporary is required (before I need uncontrolled component, but I won`t =) )
}

export default TextInput;
