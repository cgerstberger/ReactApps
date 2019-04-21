import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';

export default class FinanceHistory extends Component {
  constructor(props){
    super(props);
    this.state = {
      financesHistory: [
        {date: "Mo. 01.01.2019", value: 2.49},
        {date: "Tu. 02.01.2019", value: 75},
        {date: "We. 03.01.2019", value: 5.70},
        {date: "Th. 04.01.2019", value: 49.99}
      ]
    }
  }

  render() {
    return (
      <Card header="History">
        <TableFinancesHistory financesHistory={this.state.financesHistory}></TableFinancesHistory>
      </Card>
    )
  }
}

const TableFinancesHistory = (props) => 
  <table className="table">
    <tbody>
      {props.financesHistory.map(entry => 
        <tr>
          <td style={tdDate}>{entry.date}</td>
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