import React, { memo } from 'react';
import { node, string, func } from 'prop-types';

import * as Styled from './Style';

export const Input = memo(({
  id = null,
  name = null,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
}) => (
  <Styled.Input
    id={id}
    name={name}
    onChange={onChange}
    value={value}
    type="text"
    autoComplete="off"
    onFocus={onFocus}
    onBlur={onBlur}
    placeholder={placeholder}
  />
));

Input.defaultProps = {
  onFocus: Function.prototype,
  onBlur: Function.prototype,
  placeholder: '',
};

Input.propTypes = {
  id: node.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  onFocus: func.isRequired,
  onBlur: func.isRequired,
  placeholder: string.isRequired,
};
