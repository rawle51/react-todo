import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Button from './form-elements/Button';
import LabledTextInput from './form-elements/LabledTextInput';

class Home extends PureComponent {
  state = {
    title: '',
    redirect: false,
    error: false,
  }

  handleChange = ({ target: { value: title } }) =>
    this.setState(() => ({ title, error: false }));

  handleSubmit = () => {
    const { title } = this.state;
    const { onTitleAdd } = this.props;

    if (title) {
      onTitleAdd(title);
      return this.setState(() => ({ redirect: true }));
    }

    this.setState(() => ({ error: true }));
  }

  render() {
    const { title, error, redirect } = this.state;

    if (redirect) return <Redirect to="/todos" />;

    return (
      <div className="flex-column">
        <LabledTextInput
          labelClassname={'app-form__label app-form__label--margin-bottom'}
          inputClassname={'app-form__input'}
          name={'todo-title'}
          label={'Name your task list'}
          value={title}
          onChange={this.handleChange}
        />
        {error && <span className="error__title">Ooops..to continue fill the name</span>}
        <Button
          className="start-page__btn link link--shadow"
          onClick={this.handleSubmit}
          type="submit"
        >
          Create
        </Button>
      </div>
    );
  }
}

export default Home;