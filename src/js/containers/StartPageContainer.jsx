import { connect } from 'react-redux';

import StartPage from '../app/pages/StartPage.jsx';
import { addTitleAction } from './../actions/actions';

const mapDispatchToProps = dispatch => {
  return {
    onTitleAdd: title => dispatch(addTitleAction(title)),
  }
}

const StartPageContainer = connect(null, mapDispatchToProps)(StartPage);
export default StartPageContainer;
