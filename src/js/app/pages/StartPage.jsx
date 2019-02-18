import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import Footer from '../../components/Footer.jsx';

import capitalizeFirstLetter from '../../utils/capitalize.js';

class StartPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      redirect: false,
      error: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value: title } }) {
    this.setState({ title, error: false });
  }

  handleSubmit(e) {
    const { title } = this.state;
    e.preventDefault();

    if(title) {
      this.props.onTitleAdd(capitalizeFirstLetter(title));
      this.setState({ title: '', redirect: true })
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { error, redirect, title } = this.state;
    return redirect ?
      <Redirect to="/todo-list" /> :
      <div className="start-page">
        <h1 className="start-page__title">Organize your tasks and enjoy your life!</h1>
        <form className="app-form app-form--column" onSubmit={this.handleSubmit}>
          <label className="app-form__label app-form__label--margin-bottom" htmlFor="todo-title">Name your task list</label>
          <input
            className="app-form__input"
            name="todo-title"
            onChange={this.handleChange}
            value={title}
            type="text"
          />
          {error && <span className="error__title">Ooops..to continue fill the name</span>}
          <Button className="start-page__btn link link--shadow" type="submit">Create</Button>
        </form>
        <Footer />
      </div>
    ;
  }
}

export default StartPage;
