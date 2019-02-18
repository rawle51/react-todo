import React from 'react';
import { connect } from 'react-redux';

import Statistic from '../components/Statistic.jsx';

function mapStateToProps(state) {
  return {
    tasks: state.task
  }
}

const StatisticContaier = connect(mapStateToProps)(Statistic);

export default StatisticContaier;