import React, { Component } from 'react';
import Card from '../common/card';
// import 'bootstrap/dist/css/bootstrap.css';

export default class DailyWeight extends Component {
  constructor(){
    super();
    this.state = {
      showDailyWeight: true,

    }
  }

  showDailyWeight(show){
    this.setState({
      showDailyWeight: show
    })
  }

  render() {
    return (
      <div className={this.state.showDailyWeight ? '' : 'cardInvisible'}>
        <Card header="DailyWeight">
          <div className="form-row">
            <div className="col-10">
              <input type="number" className="form-control input-right-align" placeholder="kg"></input>
            </div>
            <button type="button" className="col-2 btn btn-primary" onClick={() => this.showDailyWeight(false)}>OK</button>
          </div>
        </Card>
      </div>
    )
  }
}
