import React from 'react';
import Card from '../common/card';
import DateTimePicker from 'react-datetime-picker';
import { number } from 'prop-types';
// import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';
// import DateTimePicker from 'material-ui-datetimepicker';
// import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
// import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';

export default class Expense extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            expense: {
                expenseName: String,
                expenseValue: number,
                date: new Date()
            },
            selectedOption: 'radioTime1',
            showExpense: true
        }
        this.handleChangeExpenseName = this.handleChangeExpenseName.bind(this);
        this.handleChangeExpenseValue = this.handleChangeExpenseValue.bind(this);
        this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleChangeExpenseName(event){
        this.setState({
            expense: {
                ...this.state.expense,
                expenseName: event.target.value
            }
        })
    }

    handleChangeExpenseValue(event){
        this.setState({
            expense: {
                ...this.state.expense,
                expenseValue: event.target.value
            }
        })
    }

    handleChangeDatePicker(dateVal){
        this.setState({
            expense: {
                ...this.state.expense,
                date: dateVal
            }
        })
    }

    handleOptionChange(changeEvent) {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      }

    createNewExpense(){
        var myExpense = {
            date: new Date(),
            name: this.state.expense.expenseName,
            value: parseFloat(this.state.expense.expenseValue)
        }
        this.props.addExpense(myExpense);
    }

    showExpense = (show) => this.setState({showExpense: show});

    render(){
        // const {date, time} = this.state;

        return(
            <div className={this.state.showExpense ? '' : 'cardInvisible'}>
                <Card header="Expense">
                    <div className="form-row">
                        <div className="col-6 col-md-8">
                            <input type="text" className="form-control" placeholder="Kino, etc." onChange={this.handleChangeExpenseName}></input>
                        </div>
                        <div className="col-3 col-md-2">
                            <div className="input-group mb-3">
                                <input type="number" className="form-control input-right-align" placeholder="€" onChange={this.handleChangeExpenseValue}></input>
                                {/* <div className="input-group-append">
                                    <span className="input-group-text">€</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-3 col-md-2">
                            <button className="col-12 btn btn-primary" onClick={() => this.createNewExpense()}>OK</button>
                        </div>
                    </div>
                    {/* possible feature for the future */}
                    {/*<div className="float-right">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                                type="radio" 
                                name="radioTime" 
                                id="radioTime1" 
                                value="radioTime1"
                                checked={this.state.selectedOption === 'radioTime1'} 
                                onChange={this.handleOptionChange}></input>
                            <label className="form-check-label" htmlFor="radioTime1">Now</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                                type="radio" 
                                name="radioTime" 
                                id="radioTime2"
                                value="radioTime2"
                                checked={this.state.selectedOption === 'radioTime2'} 
                                onChange={this.handleOptionChange}></input>
                            <label className="form-check-label" htmlFor="radioTime2">Time: </label>
                            <DateTimePicker onChange={this.handleChangeDatePicker} value={this.state.expense.date}></DateTimePicker>
                        </div>
                    </div>*/}
                </Card>
            </div>
        );
    }
}