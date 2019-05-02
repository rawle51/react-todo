import { connect } from 'react-redux';
import Title from '../components/Title';

export default connect(({ title }) => ({ title }))(Title);
