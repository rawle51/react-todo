import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterList = ({ tasks, setFilter, filter }) => {
  const all = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const uncompleted = all - completed;
  const filters = [{ title: 'ALL', amount: all }, { title: 'COMPLETED', amount: completed }, { title: 'UNCOMPLETED', amount: uncompleted }]

  return (
    <Container>
      {filters.map(({ title, amount}) =>
        <Filter key={title} active={filter === title} onClick={() => setFilter(title)}>
          {`${title}: ${amount}`}
        </Filter>
      )}
    </Container>
  );
};

FilterList.propTypes = {
  filter: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  })),
}

export default FilterList;
