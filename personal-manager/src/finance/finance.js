import React from 'react';
import Expense from './expense';
import FinanceToday from './finance_today';
import FinanceHistory from './history';
import FinanceStatistics from './statistics';
import {addTodoItem2} from "../db/dbFunctions";

export default class Finance extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            dailyFinances: [
                {date: new Date(2019, 6, 12, 8, 27, 12), name:"Leberkäsesemmel", value: 2.49},
                {date: new Date(2019, 6, 12, 9, 20, 17), name:"Monitor", value: 75},
                {date: new Date(2019, 6, 12, 12, 12, 1), name:"Mittagessen", value: 5.70},
                {date: new Date(2019, 6, 12, 19, 19, 19), name:"Kopfhörer", value: 49.99},
            ],
            financeHistory: [
                {date: new Date(2019, 6, 8, 8, 27, 12), value: 154},
                {date: new Date(2019, 6, 9, 9, 20, 17), value: 25},
                {date: new Date(2019, 6, 10, 12, 12, 1), value: 5.70},
                {date: new Date(2019, 6, 12, 19, 19, 19), value: 49.99}
            ]
        }
    }

    addExpense(expense){
        this.setState({
            dailyFinances: [...this.state.dailyFinances, expense]
        });
        console.log("wtf ----- " + global.db);

        addTodoItem2(); // eslint-disable-line
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
