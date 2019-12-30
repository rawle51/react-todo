import React from 'react';

import * as Styled from './Style';

export const Loader = () => (
  <Styled.Container>
    <Styled.Circular viewBox="25 25 50 50">
      <Styled.Path cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />
    </Styled.Circular>
  </Styled.Container>
);
