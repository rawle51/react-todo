import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  a + a:not(:last-of-type) {
    position: absolute;
    display: block;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
