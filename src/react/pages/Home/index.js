import React, { memo } from 'react';
import { connect } from 'react-redux';

import { HomeForm } from '../../components/Forms';
import { addTitleAction } from '../../store/actions';
import * as Styled from './Style';

const Component = memo(props => (
  <Styled.Container>
    <Styled.Title>Organize your tasks and enjoy your life!</Styled.Title>
    <HomeForm {...props} />
  </Styled.Container>
));

export const Home = connect(null, { addTitleAction })(Component);
