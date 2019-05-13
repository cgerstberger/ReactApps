import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];	

export default class WeightStatistics extends Component {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {

		var data2 = [];
		var min = 500;
		var max = 0;
		for(var i = 0; i < this.props.weightEntries.length; i ++){
			const weight = this.props.weightEntries[i].weight;
			if(weight < min)
				min = weight;
			if(weight > max)
				max = weight;
			data2[i] = {
				day: this.props.weightEntries[i].date, 
				x: (i+1), 
				weight: weight
			}
		}
    return (
      <Card header="Statistics">
				<LineChart
					width={500}
					height={300}
					data={data2}
					margin={{
						top: 5, right: 30, left: 20, bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis type="number" domain={[Math.round(min-2), Math.round(max+2)]}/>
					<Tooltip />
					{/* <Legend /> */}
					<Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
				</LineChart>
			</Card>
    );
  }
}
