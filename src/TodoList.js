import React, { Component } from "react";

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="main">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="JOBS"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add JOB </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;