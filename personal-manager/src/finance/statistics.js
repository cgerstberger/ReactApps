import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class FinanceStatistics extends Component {
  render() {
		var data = [];
		var min = 500000;
		var max = 0;
		for(var i = 0; i < this.props.financeHistory.length; i ++){
			const value = this.props.financeHistory[i].value;
			if(value < min)
				min = value;
			if(value > max)
				max = value;
			data[i] = {
				date: this.props.financeHistory[i].date,
				value: value,

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
					<XAxis dataKey="date" />
					<YAxis type="number" domain={[Math.round(min)-2, Math.round(max)+2]}/>
					<Tooltip />
					<Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</Card>
    )
}
}
