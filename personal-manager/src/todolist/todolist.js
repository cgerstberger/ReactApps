import React, { Component } from 'react'
import NewItem from './new_item';
import List from './list';
import {addTodoItem, readAllTodos} from "../db/dbFunctions";

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

    readAllTodos()
  }

  pushItem = ele => {
    this.setState({
      todos: [...this.state.todos, ele]
    })
    addTodoItem(ele);
  }

  deleteItem = ele => {
    var array = this.state.todos;
    var index = array.indexOf(ele);
    if(index != -1){
      array.splice(index, 1);
      this.setState({
        todos: array
      });
    }
  }

  render() {
    return (
      <div>
        <NewItem pushItem={this.pushItem}></NewItem>
        <List todos={this.state.todos} deleteItem={this.deleteItem}></List>
      </div>
    )
  }
}
