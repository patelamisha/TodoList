import React, { Component } from 'react';

class TodoItems extends Component {
  createJobs= item => {
    return (
      <li>{item.text}
      <button key={item.key} onClick={(e) => this.props.deleteItem(item.key)}>
      Delete </button>
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createJobs)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems;