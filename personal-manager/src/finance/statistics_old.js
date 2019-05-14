import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';
import CanvasJSReact from '../canvasjs-2.3.1/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class FinanceStatistics extends Component {
  render() {
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Expenses per day"
			},
			axisY: {
				title: "Euro",
				includeZero: false,
				suffix: "€"
			},
			axisX: {
				title: "Date",
				prefix: "D",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Day {x}: {y}€",
				dataPoints: [
					{ x: 1, y: 13.8 },
					{ x: 2, y: 5.4 },
					{ x: 3, y: 78 },
					{ x: 4, y: 60 },
					{ x: 5, y: 4.2 },
					{ x: 6, y: 10.9 },
					{ x: 7, y: 6.9 },
					{ x: 8, y: 0 },
					{ x: 9, y: 18.2 }
				]
			}]
		}
    return (
      <Card header="Statistics">
				<CanvasJSChart options = {options} /* onRef={ref => this.chart = ref} */ />
			</Card>
    )
  }
}
