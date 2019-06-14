import React, { Component } from 'react';
import DailyWeight from './daily_weight';
import WeightHistory from './weight_history';
import WeightStatistics from './weight_statistics';
import {readAllWeightsCallback, addWeightItem} from "../db/dbFunctions";

export default class Weight extends Component {
  constructor(props){
    super(props);
    this.state = {
      weightEntries: [
        // {id: "1", date: new Date(2019, 6, 6), weight: 75},
        // {id: "2", date: new Date(2019, 6, 7), weight: 74.7},
        // {id: "3", date: new Date(2019, 6, 8), weight: 74.2},
        // {id: "4", date: new Date(2019, 6, 9), weight: 74.5}
      ]
    }

    readAllWeightsCallback((result) => {
      this.setState({
        weightEntries: [...this.state.weightEntries, ...result]
      });
    })
  }

  addDailyWeight(item){
    addWeightItem(item, (id) => {
      this.setState({
        weightEntries: [...this.state.weightEntries, {id: id, ...item}]
      });
    });
  }

  render() {
    return (
      <div>
        <DailyWeight addDailyWeight={(item) => this.addDailyWeight(item)} weightEntries={this.state.weightEntries}></DailyWeight>
        <WeightHistory weightEntries={this.state.weightEntries}></WeightHistory>
        <WeightStatistics weightEntries={this.state.weightEntries}></WeightStatistics>
      </div>
    )
  }
}
