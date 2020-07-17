import React from 'react';
import { func, bool, node, string } from 'prop-types';

import * as Styled from './Style';

export const Button = ({
  innerRef,
  children,
  ...otherProps
}) => (
  <Styled.Button
    ref={innerRef}
    {...otherProps}
  >
    {children}
  </Styled.Button>
);

Button.defaultProps =  {
  type: 'text',
  isShadow: false,
  innerRef: null,
  onClick: Function.prototype,
  disabled: false,
};

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  isShadow: bool,
  type: string,
  innerRef: func,
  disabled: bool,
};
