import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Button from './form-elements/Button';
import LabledTextInput from './form-elements/LabledTextInput';

const Home = ({ onTitleAdd }) => {
  const [title, handleChange] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (title) {
      onTitleAdd(title);
      return setRedirect(true);
    }

    return setError(true);
  };

  if (redirect) return <Redirect to="/todos" />;

  return (
    <div className="flex-column">
      <LabledTextInput
        labelClassname="app-form__label app-form__label--margin-bottom"
        inputClassname="app-form__input"
        name="todo-title"
        label="Name your task list"
        value={title}
        onChange={e => handleChange(e.target.value)}
      />
      {error && <span className="error__title">Ooops..to continue fill the name</span>}
      <Button
        className="start-page__btn link link--shadow"
        onClick={handleSubmit}
        type="submit"
      >
        Create
      </Button>
    </div>
  );
};

Home.defaultProps = {
  onTitleAdd: Function.prototype,
};

Home.propTypes = {
  onTitleAdd: PropTypes.func,
};

export default Home;
