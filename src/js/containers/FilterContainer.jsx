import { connect } from 'react-redux';

import Filter from '../components/Filter.jsx';
import { filterAction, searchTasksAction } from './../actions/actions.js';

function mapStateToProps(state) {
  return {
    activeFilter: state.filter,
    total: state.task,
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFilter: filter => dispatch(filterAction(filter)),
    clearSearch: search => dispatch(searchTasksAction(search))
  }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
