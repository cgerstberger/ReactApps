import React, { Component } from 'react'
import Card from '../common/card';

export default class List extends Component {

  constructor(props){
    super(props);
    // this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <Card header="Todo List">
        <TableTodos todos={this.props.todos} deleteItem={this.props.deleteItem}></TableTodos>
      </Card>
    )
  }
}

function TableTodos(props) {
  return (
    <table className="table">
      <tbody>
        { props.todos.map(todo => 
          <tr>
            <td style={{...tdDate, ...verticalAlignCenter}}>{todo.text}</td>
            <td style={tdDelete}><button onClick={() => props.deleteItem(todo)} type="button" className="btn btn-danger">x</button></td>
          </tr>
        ) }
      </tbody>
    </table>
  )
}

const verticalAlignCenter = {
  verticalAlign: "middle"
}

const tdDate = {
  width: "90%"
};
const tdDelete = {
  width: "10%",
  textAlign: "right"
};