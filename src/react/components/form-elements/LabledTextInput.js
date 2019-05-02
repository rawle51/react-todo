import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

const LabledTextInput = ({
  labelClassname,
  inputClassname,
  name,
  label,
  value,
  onChange,
}) => (
  <Fragment>
    <label className={labelClassname} htmlFor={name}>
      {label}
    </label>
    <TextInput
      className={inputClassname}
      name={name}
      value={value}
      onChange={onChange}
    />
  </Fragment>
);

LabledTextInput.defaultProps = {
  labelClassname: '',
  inputClassname: '',
};

LabledTextInput.propTypes = {
  labelClassname: PropTypes.string,
  inputClassname: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabledTextInput;
