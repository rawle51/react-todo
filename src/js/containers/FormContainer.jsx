import { connect } from 'react-redux';

import Form from './../components/Form.jsx';
import { addTaskAction } from './../actions/actions.js';

const mapDispatchToProps = dispatch => {
  return {
    onAdd: title => dispatch(addTaskAction(title)),
  };
};

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;