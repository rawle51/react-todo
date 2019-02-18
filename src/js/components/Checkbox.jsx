import React from 'react';

const Checkbox = ({ checked, onChange }) => {
  return (
    <button onClick={onChange} className={`checkbox icon${checked ? ' checkbox_checked' : ''}`}>
      <i className="material-icons">{checked ? 'check_box' : 'check_box_outline_blank'}</i>
    </button>
  );
}

export default Checkbox;