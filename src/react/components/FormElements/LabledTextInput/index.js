import React, { memo } from 'react';
import { string, func } from 'prop-types';

import { Input } from '../Input';
import * as Styled from './Style';

export const LabledTextInput = memo(({
  name,
  label,
  value,
  onChange,
}) => (
  <>
    <Styled.Label htmlFor={name}>
      {label}
    </Styled.Label>
    <Input
      name={name}
      value={value}
      onChange={onChange}
    />
  </>
));

LabledTextInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};
