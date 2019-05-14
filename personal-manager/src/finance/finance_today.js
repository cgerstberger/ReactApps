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
      const arr1 = [1,2,3,4];
    return (
      <Card header="Today">
        <TableFinances dailyFinances={this.props.dailyFinances}></TableFinances>
        <div className="float-right">
            <b>{this.props.dailyFinances.reduce((a,c) => {
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

const TableFinances = (props) => 
    <table className="table">
        <tbody>
            {props.dailyFinances.map(entry => 
                <tr>
                    <td style={tdName}>{entry.name}</td>
                    <td style={tdDate}>{entry.time}</td>
                    <td style={tdWeight}>{entry.value} €</td>
                </tr>
            )}
        </tbody>
    </table>

const tdName = {
  width: "70%"
};
const tdDate = {
  width: "15%"
};
const tdWeight = {
  width: "15%",
  textAlign: "right"
};