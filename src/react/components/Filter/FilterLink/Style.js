import styled, { css } from 'styled-components';

export const Link = styled.a`
  color: #000;
  text-decoration: none;
  cursor: pointer;

  ${({ active }) => active && css`
    border-bottom: 2px solid #62d98d;
  `}
`;
