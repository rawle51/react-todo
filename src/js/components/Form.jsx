import React from 'react';
import Button from './Button.jsx';
import toggleClass from './../utils/toggleClass.js';



class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }

    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    toggleClass('app-form--hidden-state', 'app-form--open-state');
    toggleClass('todo__show-form-btn', 'hide');
  }

  handleChange({target: { value: title }}) {
    this.setState({ title });
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;

    if(title) {
      this.props.onAdd(title);
      this.setState(() => ({ title: ''}));
      
      toggleClass('app-form--hidden-state', 'app-form--open-state');
      toggleClass('todo__show-form-btn', 'hide');
    }
  }

  render() {
    return(
      <div>
        <form className="app-form app-form--row app-form--space-between app-form--hidden-state" onSubmit={this.handleSubmit} >
          <input 
            className="app-form__input app-form__input--wide"
            type="text"
            onChange={this.handleChange}
            placeholder="Example: Visit United States in 2019"
            value={this.state.title}
          />
          <Button className="app-form__btn link" type="submit" >Add</Button>
        </form>
        <Button className="todo__show-form-btn link link--center link--shadow" onClick={this.showForm} type="text">+ Add task</Button>
      </div>
    );
  }
}

export default Form;