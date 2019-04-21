import React from 'react';
import Expense from './expense';
import FinanceToday from './finance_today';
import FinanceHistory from './history';
import FinanceStatistics from './statistics';

export default class Finance extends React.Component{
    render(){
        return(
            <div>
                <Expense></Expense>
                <FinanceToday></FinanceToday>
                <FinanceHistory></FinanceHistory>
                <FinanceStatistics></FinanceStatistics>
            </div>
        );
    }
}
