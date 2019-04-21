import React, { Component } from 'react'
import NewItem from './new_item';
import List from './list';

export default class Todolist extends Component {

  constructor(){
    super();
    this.state = {
      todos: [
        {text: "Mobile Web Development - Project"},
        {text: "Mini Assignments"},
        {text: "MSc Project"}
      ]
    }
  }

  pushItem = ele => {
    this.setState({
      todos: [...this.state.todos, ele]
    })
  }

  render() {
    return (
      <div>
        <NewItem pushItem={this.pushItem}></NewItem>
        <List todos={this.state.todos}></List>
      </div>
    )
  }
}
