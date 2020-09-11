import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    padding: 12px 12px 0 12px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 12px;
  color: rgb(48, 47, 47);
  margin-bottom: 10px;
  font-size: 16px;
  transform: translateY(-50%);
  transition: all .4s ease-in-out;
  pointer-events: none;

  ${({ isFocused }) => isFocused && css`
    top: 6px;
    font-size: 11px;
    transform: none;
  `};
`;
