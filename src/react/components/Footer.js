import React, { memo } from 'react';
import styled from 'styled-components';
import githubLogo from '../../img/gh-logo.svg';

// a bit of experiments with styled Components
const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin: 20px auto 0;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  line-height: 50px;
`;

const StyledText = styled.span`
  margin-right: 10px;
`;

const StyledLink = styled.a`
  width: 50px;
  height: 45px;
`;

export default memo(() =>
  <Container>
    <InnerContainer>
      <StyledText>Source code on Github</StyledText>
      <StyledLink href="https://github.com/rawle51/react-checklist" target="_blank" >
        <img src={githubLogo} alt="github logo" width="50" height="45" />
      </StyledLink>
    </InnerContainer> 
  </Container>
);
