import React from 'react';
import Expense from './expense';
import FinanceToday from './finance_today';

export default class Finance extends React.Component{
    render(){
        return(
            <div>
                <Expense></Expense>
                <FinanceToday></FinanceToday>
            </div>
        );
    }
}
