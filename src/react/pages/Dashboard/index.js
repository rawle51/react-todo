import React, { memo, useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

import { Filter } from '../../components/Filter';
import { AddTaskForm } from '../../components/Forms';
import { setTitle } from '../../helpers/document-helpers';
import * as Styled from './Style';

const Tasks = lazy(() => import('../../containers/TasksContainer'));

const Component = memo(({
  title,
}) => {
  useEffect(() => { setTitle('Todo list by Konstantin Rawle'); });

  return (
    <>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Header>
      <Filter />
      <Suspense fallback="Tasks is loading...">
        <Tasks />
      </Suspense>
      <AddTaskForm />
    </>
  );
});

Component.propTypes = {
  title: string.isRequired,
};

export const Dashboard = connect(
  ({ title }) => ({ title }),
)(Component);
