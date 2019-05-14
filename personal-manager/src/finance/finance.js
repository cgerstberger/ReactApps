import React from 'react';
import Expense from './expense';
import FinanceToday from './finance_today';
import FinanceHistory from './history';
import FinanceStatistics from './statistics.1';

export default class Finance extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            dailyFinances: [
                {date: "Mo. 01.01.2019", name:"Leberkäsesemmel", value: 2.49},
                {date: "Tu. 01.01.2019", name:"Monitor", value: 75},
                {date: "We. 01.01.2019", name:"Mittagessen", value: 5.70},
                {date: "Th. 01.01.2019", name:"Kopfhörer", value: 49.99},
            ],
            financeHistory: [
                {date: "Mo. 01.01.2019", value: 154},
                {date: "Tu. 02.01.2019", value: 25},
                {date: "We. 03.01.2019", value: 5.70},
                {date: "Th. 04.01.2019", value: 49.99}
            ]
        }
    }

    addExpense(expense){
        this.setState({
            dailyFinances: [...this.state.dailyFinances, expense]
        });
    }

    render(){
        return(
            <div>
                <Expense addExpense={(expense) => this.addExpense(expense)}></Expense>
                <FinanceToday dailyFinances={this.state.dailyFinances}></FinanceToday>
                <FinanceHistory financeHistory={this.state.financeHistory}></FinanceHistory>
                <FinanceStatistics financeHistory={this.state.financeHistory}></FinanceStatistics>
            </div>
        );
    }
}
