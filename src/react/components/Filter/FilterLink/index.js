import React, { memo } from 'react';
import { node, func, bool, string } from 'prop-types';

import * as Styled from './Style';

export const FilterLink = memo(({
  title,
  onClick,
  active = false,
  children,
}) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <Styled.Link active={active} onClick={handleClick}>
      {children}
    </Styled.Link>
  );
});

FilterLink.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
  active: bool.isRequired,
  title: string.isRequired,
};
