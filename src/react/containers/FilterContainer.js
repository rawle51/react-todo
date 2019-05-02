import { connect } from 'react-redux';
import FilterList from '../components/Filter/FilterList';
import { filterAction } from '../store/actions/actions';

export default connect(
  ({ tasks, filter }) => ({ tasks, filter }),
  dispatch => ({
    setFilter: filter => dispatch(filterAction(filter)),
  }),
)(FilterList);
