import React from 'react';
import PropTypes from 'prop-types';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';

import { Input } from '../../FormElements';
import * as Styled from './Style';

export const EditTask = ({ onClick, onChange, title }) => (
  <Styled.Container>
    <Input
      isDefaultFocused
      onChange={onChange}
      value={title}
    />
    <SaveRoundedIcon htmlColor="#421744" onClick={onClick} />
  </Styled.Container>
);

EditTask.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
