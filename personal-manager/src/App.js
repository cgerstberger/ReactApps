import React, { Component } from 'react';
import './App.css';
import Weight from './weight/weight';
// import CanvasJS from '../src/canvasjs-2.3.1/canvasjs.react';
// import CanvasJSReact from '../src/canvasjs-2.3.1/canvasjs.react';
// // var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class App extends Component {
  render() {
    // var chart = new CanvasJS.Chart("chartContainer", {
    //   data: [
    //   {
    //       type: "column",
    //       dataPoints: [
    //       { x: 10, y: 10 },
    //       { x: 20, y: 15 },
    //       { x: 30, y: 25 },
    //       { x: 40, y: 30 },
    //       { x: 50, y: 28 }
    //       ]
    //   }]});

    // chart.render();

    // const options = {
		// 	animationEnabled: true,
		// 	exportEnabled: true,
		// 	theme: "light2", // "light1", "dark1", "dark2"
		// 	title:{
		// 		text: "Bounce Rate by Week of Year"
		// 	},
		// 	axisY: {
		// 		title: "Bounce Rate",
		// 		includeZero: false,
		// 		suffix: "kg"
		// 	},
		// 	axisX: {
		// 		title: "Date",
		// 		prefix: "W",
		// 		interval: 1
		// 	},
		// 	data: [{
		// 		type: "line",
		// 		toolTipContent: "Week {x}: {y}%",
		// 		dataPoints: [
		// 			{ x: 1, y: 64 },
		// 			{ x: 2, y: 61 },
		// 			{ x: 3, y: 64 },
		// 			{ x: 4, y: 62 },
		// 			{ x: 5, y: 64 },
		// 			{ x: 6, y: 60 },
		// 			{ x: 7, y: 58 },
		// 			{ x: 8, y: 59 },
		// 			{ x: 9, y: 53 }
		// 		]
		// 	}]
		// }
    return (
      <div className="App">
        <Weight></Weight>
        {/* <CanvasJSChart options = {options} /> */}
      </div>
    );
  }
}

// const chartCont = { 
//   height: "500px",
//   width: "50%"
// };