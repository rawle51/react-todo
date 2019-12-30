import React, { memo, useState } from 'react';
import { string, func, bool } from 'prop-types';

import { Input } from '../Input';
import * as Styled from './Style';

export const LabledTextInput = memo(({
  name,
  label,
  value,
  id,
  onChange,
  isDefaultFocused,
}) => {
  const [isFocused, setFocus] = useState(isDefaultFocused);
  const onFocus = () => setFocus(true);
  const onBlur = () => !value && setFocus(false);

  return (
    <Styled.Container>
      <Styled.Label htmlFor={name} isFocused={isFocused}>
        {label}
      </Styled.Label>
      <Input
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Styled.Container>
  );
});

LabledTextInput.defaultProps = {
  isDefaultFocused: false,
};

LabledTextInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  id: string.isRequired,
  isDefaultFocused: bool,
};
