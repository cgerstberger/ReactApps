import React, { Component } from 'react'
import Card from '../common/card';

export default class List extends Component {

  render() {
    return (
      <Card header="Todo List">
        <TableTodos todos={this.props.todos}></TableTodos>
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
            <td style={tdDelete}><button type="button" className="btn btn-danger">x</button></td>
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