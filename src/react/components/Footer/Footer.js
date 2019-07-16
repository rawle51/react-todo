import React, { memo } from 'react';
import * as Styled from './Style';
import githubLogo from './gh-logo.svg';

export default memo(() => (
  <Styled.Container>
    <Styled.Inner>
      <Styled.Text>Source code on Github</Styled.Text>
      <Styled.Link href="https://github.com/rawle51/react-todo" target="_blank">
        <img src={githubLogo} alt="github logo" width="50" height="45" />
      </Styled.Link>
    </Styled.Inner>
  </Styled.Container>
));
