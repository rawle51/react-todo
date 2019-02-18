
import { connect } from 'react-redux';

import TaskList from './../components/TaskList.jsx';
import { deleteTasklAction,
  completeTaskAction,
  editTaskAction,
  reorderAction,
  getDefaultTodoTasks,
} from './../actions/actions.js';


const mapStateToProps = ({ task, search, filter}) => {
  return {
    taskList: task.filter(task => ~task.title.toLowerCase().indexOf(search)),
    activeFilter: filter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onStatusChange: id => dispatch(completeTaskAction(id)),
    onTaskDelete: id => dispatch(deleteTasklAction(id)),
    onTaskEdit: (id, title) => dispatch(editTaskAction(id, title)),
    onReodrer: list => dispatch(reorderAction(list)),
    addDefaultTodos: () => dispatch(getDefaultTodoTasks()),
  };
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskListContainer;