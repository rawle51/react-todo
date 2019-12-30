import React, { memo } from 'react';
import { connect } from 'react-redux';
import {
  string,
  number,
  bool,
  func,
  arrayOf,
  shape,
} from 'prop-types';

import { FilterLink } from './FilterLink';
import { filterAction } from '../../store/actions';
import * as Styled from './Style';

const Component = memo(({ tasks, filterAction: setFilter, filter }) => {
  const all = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const uncompleted = all - completed;
  const filters = [
    { title: 'ALL', amount: all },
    { title: 'COMPLETED', amount: completed },
    { title: 'UNCOMPLETED', amount: uncompleted },
  ];

  return (
    <Styled.Container>
      {filters.map(({ title, amount }) => (
        <FilterLink
          key={title}
          title={title}
          active={filter === title}
          onClick={setFilter}
        >
          {`${title}: ${amount}`}
        </FilterLink>
        ))}
    </Styled.Container>
  );
});

export const Filter = connect(
  ({ tasks, filter }) => ({ tasks, filter }),
  {
    filterAction,
  },
)(Component);

Component.propTypes = {
  filter: string.isRequired,
  filterAction: func.isRequired,
  tasks: arrayOf(shape({
    id: number.isRequired,
    completed: bool.isRequired,
    title: string.isRequired,
  })).isRequired,
};
