import styled, { css } from 'styled-components';

import { backgroundGradient } from '../../../styles';

export const Link = styled.a`
  min-height: 27px;
  ${backgroundGradient};
  text-decoration: none;
  cursor: pointer;

  ${({ active }) => active && css`
    border-bottom: 2px solid #421744;
  `}
`;
