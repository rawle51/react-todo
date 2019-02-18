import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, onChange }) => {
  return (
    <button
      className={classNames('checkbox icon', { 'checkbox_checked': checked })}
      onClick={onChange}
    >
      <i className="material-icons">
        {checked ? 'check_box' : 'check_box_outline_blank'}
      </i>
    </button>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;