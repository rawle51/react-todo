import { connect } from 'react-redux';

import Header from '../components/Header.jsx';

const mapStateToProps = ({ title }) => {
  return {
    title,
  }
}

const HeaderContainer = connect(mapStateToProps)(Header);
export default HeaderContainer;
