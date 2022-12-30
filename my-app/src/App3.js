import React, { Component } from 'react'

export default class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:1
        }
    }
  render() {
    return (
      <div>
        <h2>num is: {this.state.num}</h2>
        <button onClick={()=>this.setState({num: this.state.num+1})}>increase1</button>
        <button onClick={this.addNum.bind(this)}>increase2</button>
        <button onClick={()=>this.addNum()}>increase3</button>
    </div>
    )
  }
  addNum(){
    this.setState({num: this.state.num + 1})
  }
}