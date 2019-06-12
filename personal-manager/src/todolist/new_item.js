import React, { Component } from 'react';
import Card from '../common/card';

export default class NewItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: ""
    };
  }

  keyUpEvent = (event) => {
    if(event.key == 'Enter'){
      this.addItem();
    }
  }

  addItem = () => {
    const val = this.state.newItem;
    if(val !== ""){
      this.props.pushItem({date: new Date(), text: this.state.newItem});
      this.setState({
        newItem: ""
      });
    }
  }

  handleChange = event => {
    this.setState({
      newItem: event.target.value
    });
  }
  
  render() {
    return (
      <Card header="New Item">
        <div className="form-row">
          <div className="col-10">
            <input type="text" 
                   className="form-control" 
                   placeholder="What is to do ..." 
                   value={this.state.newItem} 
                   onChange={this.handleChange}
                   onKeyUp={this.keyUpEvent}></input>
          </div>
          <button type="button" 
                  className="col-2 btn btn-primary" 
                  onClick={this.addItem}>OK</button>
        </div>
      </Card>
    )
  }
}
