import { connect } from 'react-redux';
import HomeForm from '../components/HomeForm';
import { addTitleAction } from '../store/actions/actions';

export default connect(null, dispatch => ({
  onTitleAdd: title => dispatch(addTitleAction(title)),
}))(HomeForm);
