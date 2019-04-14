import React from 'react';
import Card from '../common/card';
import DateTimePicker from 'react-datetime-picker';
// import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';
// import DateTimePicker from 'material-ui-datetimepicker';
// import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
// import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';

export default class Expense extends React.Component{

    constructor(){
        super();
        this.state = {
            date: new Date(),
            time: new Date(),
            dateTime: null,
            showExpense: true
        }
    }

    onChange = date => this.setState({
        date: date
    });

    onChangeDate = date => this.setState({ date: date });

    onChangeTime = time => this.setState({ time: time });
     
    setDate = (dateTime) => this.setState({ dateTime });

    showExpense = (show) => this.setState({showExpense: show});

    render(){
        // const {date, time} = this.state;
        return(
            <div className={this.state.showExpense ? '' : 'cardInvisible'}>
                <Card header="Expense">
                    <div className="form-row">
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder="Kino, etc."></input>
                        </div>
                        <div className="col-2">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control input-right-align"></input>
                                <div className="input-group-append">
                                    <span className="input-group-text">€</span>
                                </div>
                            </div>
                        </div>
                        <button className="col-2 btn btn-primary" onClick={() => this.showExpense(false)}>OK</button>
                    </div>
                    <div className="float-right">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioTime" id="radioTime1" defaultChecked></input>
                            <label className="form-check-label" htmlFor="radioTime1">Now</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioTime" id="radioTime2"></input>
                            <label className="form-check-label" htmlFor="radioTime2">Time: </label>
                            <DateTimePicker onChange={this.onChange} value={this.state.date}></DateTimePicker>

                            {/*  */}


                            {/* <DateTimePicker 
                                onChange={this.setDate}
                                DatePicker={DatePickerDialog}
                                TimePicker={TimePickerDialog}/> */}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}