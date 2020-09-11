import styled, { css } from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 2px;
  background: linear-gradient(45deg, #d350db, teal, #d350db);
  background-size: 400% 400%;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;
  opacity: 1;
  transition: all 0.24s cubic-bezier(0.55, 0, 0.1, 1);

  &:hover {
    background-color: rgba(158,158,158,.2);
  }

  &:active {
    background-color: rgba(158,158,158,.4);
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.4;
  `};

  ${({ isShadow, disabled }) => isShadow && !disabled && css`
    box-shadow: 0 17px 11px -10px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 17px 11px -13px rgba(0, 0, 0, 0.2);
    }
  `}
`;
