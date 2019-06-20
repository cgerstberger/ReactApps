import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class WeightStatistics extends Component {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {

		var data = [];
		var min = 500;
		var max = 0;
		for(var i = 0; i < this.props.weightEntries.length; i ++){
			const weight = this.props.weightEntries[i].weight;
			if(weight < min)
				min = weight;
			if(weight > max)
				max = weight;
			data[i] = {
				day: this.props.weightEntries[i].date, 
				// x: (i+1), 
				weight: weight
			}
		}
    return (
      <Card header="Statistics">
			<ResponsiveContainer width='100%' aspect={4.0/1.5}>
				<LineChart
					width={'auto'}
					height={300}
					data={data}
					margin={{
						top: 5, right: 30, left: 20, bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis type="number" domain={[Math.round(min)-2, Math.round(max)+2]}/>
					<Tooltip />
					{/* <Legend /> */}
					<Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</Card>
    );
  }
}
