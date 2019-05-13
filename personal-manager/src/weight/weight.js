import React, { Component } from 'react';
import DailyWeight from './daily_weight';
import WeightHistory from './weight_history';
import WeightStatistics from './weight_statistics_recharts';

export default class Weight extends Component {
  constructor(props){
    super(props);
    this.state = {
      weightEntries: [
        {date: "Mo. 01.01.19",weight: 75},
        {date: "Tu. 02.01.19",weight: 74.7},
        {date: "We. 03.01.19",weight: 74.2},
        {date: "Th. 04.01.19",weight: 74.5}
      ]
    }
  }

  addDailyWeight(weight){
    var dateNow = new Date();
    var formattedDate = dateNow.getDate() + "." + (dateNow.getMonth()+1) + "." + dateNow.getFullYear();
    this.setState({
      weightEntries: [...this.state.weightEntries, {date: formattedDate, weight: weight}]
    })
  }

  render() {
    return (
      <div>
        <DailyWeight addDailyWeight={(weight) => this.addDailyWeight(weight)}></DailyWeight>
        <WeightHistory weightEntries={this.state.weightEntries}></WeightHistory>
        <WeightStatistics weightEntries={this.state.weightEntries}></WeightStatistics>
      </div>
    )
  }
}
