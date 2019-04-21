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
				text: "Bounce Rate by Week of Year"
			},
			axisY: {
				title: "Euro",
				includeZero: false,
				suffix: "€"
			},
			axisX: {
				title: "Date",
				prefix: "W",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 }
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
