import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 6px;

  &:hover {
    background: #f2f2f2;
  }

  label {
    margin-right: auto;

    > span:hover {
      background: transparent;
    }
  }

  svg {
    cursor: pointer;

    + svg {
      margin-left: 12px;
    }
  }
`;
