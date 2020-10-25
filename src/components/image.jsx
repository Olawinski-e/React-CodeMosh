import React, { Component } from "react";

class Image extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }}>hello</span>
        <span style={this.styles}>you</span>

        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
}

export default Image;
