import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';

export default class WeightHistory extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Card header="History">
        <TableWeightHistory weightEntries={this.props.weightEntries}></TableWeightHistory>
      </Card>
    )
  }
}

function formatDate(date) {
  var formattedDate = date.toLocaleDateString("de-DE", {weekday: "short", year: "numeric", month: "short", day: "numeric"});
  // var formattedDate = date.toLocaleTimeString("de-DE", {hour: '2-digit', minute:'2-digit'})
  return formattedDate;
}

const TableWeightHistory = (props) => 
  <table className="table">
    <tbody>
      {props.weightEntries.map(we => 
        <tr>
          <td style={tdDate}>{formatDate(we.date)}</td>
          <td style={tdWeight}>{we.weight} kg</td>
        </tr>
      )}
    </tbody>
  </table>

const tdDate = {
  width: "70%"
};
const tdWeight = {
  width: "30%",
  textAlign: "right"
};