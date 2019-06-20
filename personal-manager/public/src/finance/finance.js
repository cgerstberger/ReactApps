import React from 'react';
import Expense from './expense';
import FinanceToday from './finance_today';
import FinanceHistory from './history';
import FinanceStatistics from './statistics';
import {addDailyFinanceItem, readAllDailyFinances, addFinanceItem, readAllFinances, deleteDailyFinance} from "../db/dbFunctions";

export default class Finance extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            dailyFinances: [
                // {id: "1", date: new Date(2019, 6, 12, 8, 27, 12), name:"Leberkäsesemmel", value: 2.49},
                // {id: "2", date: new Date(2019, 6, 12, 9, 20, 17), name:"Monitor", value: 75},
                // {id: "3", date: new Date(2019, 6, 12, 12, 12, 1), name:"Mittagessen", value: 5.70},
                // {id: "4", date: new Date(2019, 6, 12, 19, 19, 19), name:"Kopfhörer", value: 49.99},
            ],
            financeHistory: [
                // {id: "1", date: new Date(2019, 6, 8, 8, 27, 12), value: 154},
                // {id: "2", date: new Date(2019, 6, 9, 9, 20, 17), value: 25},
                // {id: "3", date: new Date(2019, 6, 10, 12, 12, 1), value: 5.70},
                // {id: "4", date: new Date(2019, 6, 12, 19, 19, 19), value: 49.99}
            ]
        }

        readAllDailyFinances((result) => {
            var historyArr = [];
            for(var i = 0; i < result.length; i ++) {
                var resItem = result[i];
                if(this.isDateEqualsCurrentDay(resItem.date)){
                    this.setState({
                        dailyFinances: [...this.state.dailyFinances, resItem]
                    });
                } else {
                    historyArr.push(resItem);
                    deleteDailyFinance(resItem);
                }
            }

            if(historyArr.length > 0) {
                // TODO: group by date and then add to finance database

                // Now: easy option: all dailyFinances are added to one date (even if not all happened in the same date)
                var sum = 0;
                historyArr.forEach(x => {
                    sum += x.value;
                });
                addFinanceItem({date: historyArr[0].date, value: sum}, (id) => {
                    readAllFinances((finances) => {
                        this.setState({
                            financeHistory: [...this.state.financeHistory, ...finances]
                        });
                    });
                });
            } else {
                readAllFinances((finances) => {
                    this.setState({
                        financeHistory: [...this.state.financeHistory, ...finances]
                    });
                });
            }
        })
    }

    isDateEqualsCurrentDay(date){
        var curDate = new Date();
        // curDate.setDate(curDate.getDate() - 1); // to test if daily expenses are transfered to history
        return curDate.getDate() == date.getDate()
            && curDate.getMonth() == date.getMonth()
            && curDate.getYear() == date.getYear();
    }

    addExpense(item){
        // this.setState({
        //     dailyFinances: [...this.state.dailyFinances, item]
        // });
        addDailyFinanceItem(item, (id) => {
            this.setState({
                dailyFinances: [...this.state.dailyFinances, {id: id, ...item}]
            });
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
