import React, { Component } from 'react'
import "./App4.css"

export default class App4 extends Component {
  render() {
    return (
      <div className='box'>
        <button onClick={this.btnClick.bind(this, 1)}>按钮1</button>
        <button onClick={this.btnClick.bind(this, 2)}>按钮1</button>
      </div>
    )
  }
  btnClick(num) {
    console.log(num)
  }
}

