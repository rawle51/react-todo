import styled from 'styled-components';

import { backgroundGradient } from '../../styles';

export const Header = styled.header`
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  ${backgroundGradient};
  font-size: 25px;
  line-height: 60px;
  margin: 0;
  text-align: center;
  background-size: 400% 400%;
`;

export const LoaderWrapper = styled.div`
  margin-bottom: 12px;
`;
