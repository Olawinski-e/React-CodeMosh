import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      value: this.props.state.value - 1,
    });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <h4>{this.props.id}</h4>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.props.onDelete} className="btn btn-info mx-2">
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary mx-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
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
      this.state.value === 0
        ? "warning"
        : (classes += this.state.value > 0 ? "success" : "danger");
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
