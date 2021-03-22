import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor()
    }
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child clickingAction={this.handleClick} />
        <Child clickingAction={this.handleClick} />
      </div>
    )
  }
}

export default Parent
