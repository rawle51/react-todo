import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
`;

const FilterLink = props => {
  return(
    <StyledLink className={`${props.active ? 'active' : ''}`} href="#" onClick={() => {
      e.preventDefault;
      props.onClick;
    }} {...props}>
      {props.children}
    </StyledLink>
  );
}

export default FilterLink;
