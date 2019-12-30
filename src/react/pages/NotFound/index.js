import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/FormElements';
import * as Styled from './Style';

export const NotFound = () => (
  <Styled.Container>
    <Styled.Title>Oops, you are on the wrong way...</Styled.Title>
    <Link to="/">
      <Button isShadow>Start page</Button>
    </Link>
  </Styled.Container>
);
