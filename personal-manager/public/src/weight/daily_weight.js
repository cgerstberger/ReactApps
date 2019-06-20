import React, { Component } from 'react';
import Card from '../common/card';
// import 'bootstrap/dist/css/bootstrap.css';

export default class DailyWeight extends Component {
  constructor(props){
    super(props);
    this.state = {
      weight: "",
      cardVanish: false,
      cardGone: false
    }
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
  }

  // componentWillReceiveProps(props){
  //   if(props != null && props.weightEntries != null) {
  //     if(props.weightEntries.length = 0)
  //       this.hideCard(false);
  //     else {
  //       var todayAlreadyWeighed = false;
  //       for(var i = 0; i < props.weightEntries.length; i ++){
  //         console.log(props.weightEntries[i].date);
  //         if(this.isDateEqualsCurrentDay(props.weightEntries[i].date)) {
  //           todayAlreadyWeighed = true;
  //         }
  //       }
  //       if(!todayAlreadyWeighed) {
  //         this.hideCard(false);
  //       }
  //     }
  //   }
  // }

  isDateEqualsCurrentDay(date){
    var curDate = new Date();
    // curDate.setDate(curDate.getDate()-1);
    return curDate.getDate() == date.getDate()
        && curDate.getMonth() == date.getMonth()
        && curDate.getYear() == date.getYear();
  }

  alreadyWeighedToday() {
    var todayAlreadyWeighed = false;
    for(var i = 0; i < this.props.weightEntries.length; i ++){
      if(this.isDateEqualsCurrentDay(this.props.weightEntries[i].date)) {
        todayAlreadyWeighed = true;
      }
    }
    return todayAlreadyWeighed;
  }

  addWeight(){
    // this.hideCard(true);
    if(this.alreadyWeighedToday()){
      alert("You already weighed yourself today. Nice body btw. :)")
    } else {
      this.props.addDailyWeight({date: new Date(), weight: this.state.weight});
      this.setState({
        weight: ""
      });
    }
  }

  hideCard(hide){
    this.setState({
      cardVanish: hide
    }, () => {
      setTimeout(() => {
        this.setState({
          cardGone: hide
        })
      }, 750);
    })
  }

  handleChangeWeight(event){
    this.setState({
      weight: event.target.value
    })
  }

  render() {
    var cardClasses = 'myCard';
    if(this.state.cardVanish)
      cardClasses += ' cardVanish';
    if(this.state.cardGone) 
      cardClasses += ' cardGone'
    return (
      <div className={cardClasses}>
        <Card header="DailyWeight">
          <div className="form-row">
            <div className="col-10">
              <input 
                type="number" 
                className="form-control input-right-align" 
                placeholder="kg" 
                value={this.state.weight}
                onChange={this.handleChangeWeight}></input>
            </div>
            <button type="button" className="col-2 btn btn-primary" onClick={() => this.addWeight()}>OK</button>
          </div>
        </Card>
      </div>
    )
  }
}
