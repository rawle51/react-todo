import styled, { css } from 'styled-components';

export const Checkbox = styled.button`
  position: relative;
  width: 32px;
  min-width: 32px;
  height: 32px;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  font-size: 24px;
  color: #757575;
  border-radius: 50%;
  overflow: hidden;
  line-height: normal;
  outline: none;
  border: none;

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-12px,-12px);
    line-height: 24px;
    width: 24px;
    vertical-align: middle;
  }

  ${({ isChecked  }) => isChecked && css`
    color: #62d98d;
  `}
`;
