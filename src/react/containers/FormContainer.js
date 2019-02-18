import { connect } from 'react-redux';
import AddForm from './../components/AddForm';
import { addTaskAction } from './../store/actions/actions';

export default connect(null, dispatch => ({
  onAdd: title => dispatch(addTaskAction(title)),
}))(AddForm);
