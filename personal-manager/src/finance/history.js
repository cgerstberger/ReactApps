import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';

export default class FinanceHistory extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Card header="History">
        <TableFinancesHistory financesHistory={this.props.financeHistory}></TableFinancesHistory>
      </Card>
    )
  }
}

function formatDate(date) {
  var formattedDate = date.toLocaleDateString("de-DE", {weekday: "short", year: "numeric", month: "short", day: "numeric"});
  // var formattedDate = date.toLocaleTimeString("de-DE", {hour: '2-digit', minute:'2-digit'})

  return formattedDate;
}

const TableFinancesHistory = (props) => 
  <table className="table">
    <tbody>
      {props.financesHistory.map(entry => 
        <tr>
          <td style={tdDate}>{formatDate(entry.date)}</td>
          <td style={tdValue}>{entry.value} €</td>
        </tr>
      )}
    </tbody>
  </table>

const tdDate = {
  width: "80%"
};
const tdValue = {
  width: "20%",
  textAlign: "right"
};