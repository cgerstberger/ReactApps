import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';

export default class FinanceToday extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   financesToday: [
    //     {name: "Leberkäsesemmel", time: "10:30", value: 2.49},
    //     {name: "Monitor", time: "10:45", value: 75},
    //     {name: "Mittagessen", time: "12:00", value: 5.70},
    //     {name: "Kopfhörer", time: "17:50", value: 49.99}
    //   ]
    // }
  }



  render() {
    return (
      <Card header="Today">
        <TableFinances dailyFinances={this.props.dailyFinances}></TableFinances>
        <div className="float-right">
            <b>{this.props.dailyFinances.length != 0 && this.props.dailyFinances.reduce((a,c) => {
                console.log(a.value + " " + c.value);
                return {
                    name: "",
                    time: "",
                    value: a.value + c.value
                };
            }).value} €</b>
        </div>
      </Card>
    )
  }
}

function formatDate(date) {
  // var formattedDate = date.toLocaleDateString("de-DE", {weekday: "short", year: "numeric", month: "short", day: "numeric"});
  var formattedDate = date.toLocaleTimeString("de-DE", {hour: '2-digit', minute:'2-digit'})
  // var day = date.getDay();
  // var month = date.getMonth();
  // var year = date.getYear();
  return formattedDate;
}

const TableFinances = (props) => 
    <table className="table">
        <tbody>
            {props.dailyFinances.map(entry => 
                <tr>
                    <td style={tdName}>{entry.name}</td>
                    <td style={tdDate}>{formatDate(entry.date)}</td>
                    <td style={tdWeight}>{entry.value} €</td>
                </tr>
            )}
        </tbody>
    </table>

const tdName = {
  width: "50%"
};
const tdDate = {
  width: "20%"
};
const tdWeight = {
  width: "30%",
  textAlign: "right"
};