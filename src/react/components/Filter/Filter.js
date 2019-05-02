import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

const Filter = ({ active, onClick, children }) => (
  <StyledLink
    className={classNames('', { active })}
    onClick={onClick}
  >
    {children}
  </StyledLink>
);

Filter.defaultProps = {
  active: false,
};

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Filter;
