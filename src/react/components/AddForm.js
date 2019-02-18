import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import toggleHOC from '../decorators/toggle';
import Button from './form-elements/Button';
import TextInput from './form-elements/TextInput';

class AddForm extends PureComponent {
  state = {
    title: '',
  }

  handleChange = ({target: { value: title }}) => {
    this.setState({ title });
  }

  addTaskHandler = () => {
    const { title } = this.state;

    if(title) {
      const { onAdd, toggleHandler } = this.props;
      onAdd(title);
      toggleHandler();
      this.setState(() => ({ title: ''}));
    }
  }

  render() {
    const { title } = this.state;
    const { toggle, toggleHandler } = this.props;

    return(
      <div>
        {toggle &&
          <div className="app-form app-form--add justify-between">
            <TextInput
              className="app-form__input app-form__input--wide"
              onChange={this.handleChange}
              placeholder="Example: Visit United States in 2020"
              value={title}
            />
            <Button
              className="app-form__btn link"
              type="submit"
              onClick={this.addTaskHandler}
            >
              Add
            </Button>
          </div>
        }
        <Button
          className="app-form__add-btn link link--shadow"
          onClick={toggleHandler}
          type="text"
        >
          {toggle ? 'Hide form' : '+ Add task'}
        </Button>
      </div>
    );
  }
};

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  toggleHandler: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default toggleHOC(AddForm);
