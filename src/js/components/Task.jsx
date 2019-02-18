import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const newTitle = this.refs.title.value;
        this.props.onTaskEdit(this.props.id, newTitle);
        this.setState({ editing: false});
    }

    renderTask() {
        return (
            <Draggable draggableId={this.props.id} index={this.props.index}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="checklist__item"
                >
                    <Checkbox checked={this.props.completed} onChange={() => this.props.onStatusChange(this.props.id)} />

                    <span className={`checklist__item-title${this.props.completed ? " completed" : ""}`}>
                        {this.props.title}
                    </span>

                    <Button className="edit icon" icon="edit" onClick={ () => this.setState({ editing: true })} />
                    <Button className="delete icon" icon="delete" onClick={() => this.props.onTaskDelete(this.props.id)} />
                </div>
            )}
            </Draggable>
        )
    }

    renderForm() {
        return(
            <form className="edit-form" onSubmit={this.handleSubmit}>
                <input className="edit-form__input" type="text" ref="title" defaultValue={this.props.title}/>
                <Button className="done icon" icon="save" type="submit" />
            </form>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderTask();
    }
}

export default Task;