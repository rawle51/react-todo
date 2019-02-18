import React from 'react';
import styled from 'styled-components';
import FilterLink from './FilterLink.jsx';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = ({ onFilter, total, activeFilter, clearSearch, search }) => {
  const totalTasks = total.length;
  const completed = total.filter(t => t.completed).length;
  const uncompleted = totalTasks - completed;
  return(  
    <Container>
      <FilterLink
        active={activeFilter === 'ALL'}
        onClick={() => {
          onFilter('ALL');
          if(search) {
            clearSearch('');
          }  
        }}
      >
        All: {totalTasks}
      </FilterLink>

      <FilterLink 
        active={activeFilter === 'COMPLETED'}
        onClick={() => {
          onFilter('COMPLETED');
          if(search) {
            clearSearch('');
          }
        }}
      >
        Completed: {completed}
      </FilterLink>

      <FilterLink 
        active={activeFilter === 'UNCOMPLETED'}
        onClick={() => {
          onFilter('UNCOMPLETED');
          if(search) {
            clearSearch('');
          }
        }}
      >
        Uncompleted: {uncompleted}
      </FilterLink>
    </Container>
  );
}

export default Filter;
