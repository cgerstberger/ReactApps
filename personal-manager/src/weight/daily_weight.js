import React, { Component } from 'react';
import Card from '../common/card';
import 'bootstrap/dist/css/bootstrap.css';

export default class DailyWeight extends Component {
  constructor(){
    super();
    this.state = {
      showDailyWeight: true,

    }
  }

  toggleSlider(){
    this.setState({
      slidedOut: !this.state.slidedOut
    });
  }

  showDailyWeight(show){
    this.setState({
      showDailyWeight: show
    })
  }

  render() {
    var content =
      <div className="form-row">
        <div className="col-10">
          <input type="number" className="form-control inputRightAlign" placeholder="kg"></input>
        </div>
          <button className="col-2 btn btn-primary" onClick={() => this.showDailyWeight(false)}>OK</button>
      </div>;
    return (
      <div className={this.state.showDailyWeight ? 'showDailyWeight' : 'showDailyWeight showDailyWeightNot'}>
        <Card 
              header="DailyWeight" 
              content={content} ></Card>
      </div>
    )
  }
}