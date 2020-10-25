import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("counter - render");

    return (
      <div>
        <h4>{this.props.id}</h4>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-info mx-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary mx-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger mx-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes +=
      this.props.counter.value === 0
        ? "warning"
        : (classes += this.props.counter.value > 0 ? "success" : "danger");
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
