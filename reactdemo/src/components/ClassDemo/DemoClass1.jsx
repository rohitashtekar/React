import React, { Component } from 'react'

export default class DemoClass1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Peter Parker",
      count: 2
    }
  }

  counter() {
    this.setState({count: this.state.count+1});
  }

  default() {
    this.setState({count: 0});
  }

  render() {
    return (
      <>
        <h2>React Tutorial</h2>
        <p>This is my name - {this.state.name}</p>
        <p>Number of likes: {this.state.count}</p>
        <button onClick={() => this.counter()}>Like</button>
        <button onClick={() => this.default()}>Reset</button>
      </>
    )
  }
}
