import React from 'react';
import { func, bool, node } from 'prop-types';

import * as Styled from './Style';

export const Button = ({
  onClick,
  isShadow = false,
  children,
  ...otherProps
}) => (
  <Styled.Button
    onClick={onClick}
    type="text"
    isShadow={isShadow}
    {...otherProps}
  >
    {children}
  </Styled.Button>
);

Button.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
  isShadow: bool.isRequired,
};
