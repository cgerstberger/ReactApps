import React, { Component } from 'react';
import DailyWeight from './daily_weight';
import WeightHistory from './weight_history';
import WeightStatistics from './weight_statistics';

export default class Weight extends Component {
  render() {
    return (
      <div>
        <DailyWeight></DailyWeight>
        <WeightHistory></WeightHistory>
        <WeightStatistics></WeightStatistics>
      </div>
    )
  }
}
