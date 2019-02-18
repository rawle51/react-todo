import { connect } from 'react-redux';

import Search from './../components/Search.jsx';
import { searchTasksAction, filterAction } from './../actions/actions.js';

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: name => dispatch(searchTasksAction(name)),
    clearFilter: filter => dispatch(filterAction(filter))
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;