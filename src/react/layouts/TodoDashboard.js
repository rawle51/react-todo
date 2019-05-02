import React, { useEffect, Fragment } from 'react';
import Title from '../containers/TitleContainer';
import Filter from '../containers/FilterContainer';
import Tasks from '../containers/TasksContainer';
import Form from '../containers/FormContainer';
import { setTitle } from '../helpers/document-helpers';

const TodoDashboard = () => {
  useEffect(() => { setTitle('Todo list by Konstantin Rawle'); });

  return (
    <Fragment>
      <Title />
      <Filter />
      <Tasks />
      <Form />
    </Fragment>
  );
};

export default TodoDashboard;
