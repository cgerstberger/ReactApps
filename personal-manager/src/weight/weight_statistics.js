import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';
import CanvasJSReact from '../canvasjs-2.3.1/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class WeightStatistics extends Component {
  render() {
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Weight over time"
			},
			axisY: {
				title: "Weight",
				includeZero: false,
				suffix: "kg"
			},
			axisX: {
				title: "Date",
				prefix: "D",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Day {x}: {y}kg",
				dataPoints: [
					{ x: 1, y: 75 },
					{ x: 2, y: 74.7 },
					{ x: 3, y: 74.2 },
					{ x: 4, y: 74.5 }
				]
			}]
		}
    return (
      <Card header="Statistics">
				<CanvasJSChart options = {options} style={{width: "100%"}} /* onRef={ref => this.chart = ref} */ />
			</Card>
    )
  }
}
