import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import { LabledTextInput } from '../../FormElements';
import * as Styled from './Style';

export const HomeForm = ({ addTitleAction }) => {
  const [isRedirect, setIsRedirect] = useState(false);

  const onSubmit = useCallback((values = {}) => {
    const { todoTitle } = values;
    if (todoTitle) {
      addTitleAction(todoTitle);
      setIsRedirect(true);
    }
  }, [setIsRedirect, addTitleAction]);

  if (isRedirect) return <Redirect to="/todos" />;

  return (
    <Styled.InputContainer>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, values }) => (
          <form onSubmit={formValues => handleSubmit(formValues)}>
            <Field name="todoTitle">
              {({ input, meta }) => (
                <>
                  <LabledTextInput
                    label="Your title"
                    id="todoTitle"
                    {...input}
                  />
                  {meta.error && <Styled.Error>Ooops..to continue fill the title</Styled.Error>}
                </>
              )}
            </Field>
            <Styled.CreateButton
              type="submit"
              isShadow
              id="button-crete-title"
              disabled={!values.todoTitle}
            >
              Create
            </Styled.CreateButton>
          </form>
        )}
      </Form>
    </Styled.InputContainer>
  );
};

HomeForm.propTypes = {
  addTitleAction: PropTypes.func.isRequired,
};
