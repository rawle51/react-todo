import React, { memo } from 'react';
import { node, string, func } from 'prop-types';

import * as Styled from './Style';

export const Input = memo(({
  id = null,
  name = null,
  value,
  onChange,
}) => (
  <Styled.Input
    id={id}
    name={name}
    onChange={onChange}
    value={value}
    type="text"
    autoComplete="off"
  />
));

Input.propTypes = {
  id: node.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};
