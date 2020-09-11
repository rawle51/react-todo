import React, { memo } from 'react';
import { string, func } from 'prop-types';

import * as Styled from './Style';

export const Input = memo(({
  id,
  name,
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
  id: null,
  placeholder: '',
  name: null,
};

Input.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  onFocus: func,
  onBlur: func,
  id: string,
  name: string,
  placeholder: string,
};
