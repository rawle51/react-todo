import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
`;

const Filter = ({ id, active, onClick, children }) => (
  <StyledLink
    id={id}
    className={classNames('', { active })}
    onClick={onClick}
  >
    {children}
  </StyledLink>
);

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Filter;
