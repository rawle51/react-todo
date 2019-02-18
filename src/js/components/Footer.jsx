import React from 'react';
import styled from 'styled-components';

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
  background-image: url('/src/img/gh-logo.svg');
`;

const Footer = () => {
  return(
    <Container>
      <InnerContainer>
        <StyledText>Source code on Github</StyledText>
        <StyledLink href="https://github.com/rawle51/react-checklist" target="_blank" ></StyledLink>
      </InnerContainer> 
    </Container>
  );
}

export default Footer;
