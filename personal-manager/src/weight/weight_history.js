import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';

export default class WeightHistory extends Component {
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

  render() {
    var content = <TableWeightHistory weightEntries={this.state.weightEntries}></TableWeightHistory>
    return (
      <Card header="History" content={content}></Card>
    )
  }
}

const TableWeightHistory = (props) => 
  <table className="table">
    <tbody>
      {props.weightEntries.map(we => 
        <tr>
          <td style={tdDate}>{we.date}</td>
          <td style={tdWeight}>{we.weight} kg</td>
        </tr>
      )}
    </tbody>
  </table>

const tdDate = {
  width: "80%"
};
const tdWeight = {
  width: "20%",
  textAlign: "right"
};