import React, { memo } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Style';

export const Checkbox = memo(({ checked, onChange }) => (
  <Styled.Checkbox isChecked={checked} onClick={onChange}>
    <i className="material-icons">
      {checked ? 'check_box' : 'check_box_outline_blank'}
    </i>
  </Styled.Checkbox>
));

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
