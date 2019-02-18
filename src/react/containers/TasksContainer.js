import { connect } from 'react-redux';
import TaskList from '../components/Task/TaskList';
import { reorderAction, deleteTasklAction, completeTaskAction, editTaskAction } from '../store/actions/actions';

export default connect(
  ({ tasks, filter }) =>
    ({ tasks, filter }),
  dispatch => ({
    onTasksReorder: tasks => dispatch(reorderAction(tasks)),
    onDelete: id => dispatch(deleteTasklAction(id)),
    onChangeStatus: id => dispatch(completeTaskAction(id)),
    onTaskEdit: (id, title) => dispatch(editTaskAction(id, title)),
}))(TaskList);
