import React, { Component } from 'react'



export default class App2 extends Component {
    state = {
        num:1
    }
  render() {
    return (
      <div>
        <h2>num is: {this.state.num}</h2>
        <button onClick={()=>this.setState({num: this.state.num+1})}>increase</button>
    </div>
    )
  }
}

/*
    state -> setState 
*/