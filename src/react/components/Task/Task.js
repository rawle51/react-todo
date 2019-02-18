import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';
import TaskForm from './TaskForm';
import Checkbox from '../form-elements/Checkbox';
import Button from '../form-elements/Button';

class Task extends PureComponent {
  state = {
    editing: false,
    title: this.props.title,
  }

  handleSubmit = event => {
    const { id, onTaskEdit } = this.props;
    const { title } = this.state;

    onTaskEdit(id, title);
    this.setState({ editing: false });
  }
  
  handleEdit = ({ target: { value: title } }) => this.setState({ title });

  changeToEditMode = () => this.setState(() => ({ editing: true }));

  renderTask() {
    const { id, index, title, completed, onDelete, onChangeStatus } = this.props;

    return (
      <Draggable draggableId={id} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="checklist__item"
          >
            <Checkbox checked={completed} onChange={() => onChangeStatus(id)} />
            <span className={classNames('checklist__item-title', { completed })}>{title}</span>
            <Button className="edit icon" icon="edit" type="button" onClick={this.changeToEditMode} />
            <Button className="delete icon" icon="delete" type="button" onClick={() => onDelete(id)} />
          </div>
        )}
      </Draggable>
    );
  }

    renderForm() {
      const { title } = this.state;

      return (
        <TaskForm onClick={this.handleSubmit} onChange={this.handleEdit} title={title} />
      );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderTask();
    }
}

export default Task;
