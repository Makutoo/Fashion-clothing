import React, { Component } from 'react'

export default class App2 extends Component {
    constructor() {
        super()
        this.state = {
            name1:'yihua',
            name2:'ziheng'
        }
    }
    
  render() {
    return (
      <div>
        <h2>Hi {this.state.name1}</h2>
        <button onClick={()=> {
          this.setState(
            this.returnNewState
            ,()=>console.log(this.state.name1)
          )
          
        }}
        >changename</button>
    </div>
    )
  }
  
  returnNewState() {
    let newState = {
      name1: this.state.name2,
      name2: this.state.name1
    }
    return newState
  }
}