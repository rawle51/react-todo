import styled, { css } from 'styled-components';

const textGradient = css`
  background: linear-gradient(45deg, #421744, rgb(12, 38, 95), #410344);
  -webkit-background-clip: text;
          background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Container = styled.div`
  margin-top: 30vh;
  text-align: center;
`;

export const Title = styled.h1`
  ${textGradient};
  margin: 20px 0;
`;
