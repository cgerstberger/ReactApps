import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';
import CanvasJSReact from '../canvasjs-2.3.1/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class WeightStatistics extends Component {

	changeUpdate(event){
		this.render();
	}

  render() {

		var data = [];
		for(var i = 0; i < this.props.weightEntries.length; i ++){
			data[i] = {x: (i+1), y: this.props.weightEntries[i].weight}
		}
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
				dataPoints: data
			}]
		}
    return (
      <Card header="Statistics">
				<div id="chartContainer"></div>
				<CanvasJSChart 
					ref={this.myRef} 
					options = {options} 
					style={{width: "100%"}}
					onChange={this.changeUpdate} /* onRef={ref => this.chart = ref} */ />
			</Card>
    )
  }
}
