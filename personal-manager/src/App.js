import React, { Component } from 'react';
import './App.css';
import Weight from './weight/weight';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Finance from './finance/finance';

export default class App extends Component {
  render() {
		return (
			<div className="App">
				<div className="container">
					<ul className="nav nav-pills" id="myTab">
						<li className="nav-item">
							<a className="nav-link " id="weight-tab" data-toggle="tab" href="#weight">Weight</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" id="finance-tab" data-toggle="tab" href="#finance">Finance</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="todo-tab" data-toggle="tab" href="#todo">Todo list</a>
						</li>
					</ul>

					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade " id="weight">
							<Weight></Weight>
						</div>
						<div className="tab-pane fade show active" id="finance">
							<Finance></Finance>
						</div>
						<div className="tab-pane fade" id="todo">Todo list</div>
					</div>

					{/* <Weight></Weight> */}
					{/* <CanvasJSChart options = {options} /> */}
				</div>
			</div>
    );
  }
}

// const chartCont = { 
//   height: "500px",
//   width: "50%"
// };