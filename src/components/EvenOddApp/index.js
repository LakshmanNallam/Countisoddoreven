import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {evenornot: true, number: 0}

  GenerateNewNum = () => {
    this.setState(previousstate => ({number: Math.ceil(Math.random() * 100)}))
  }

  checkstatus = () => {
    const {number} = this.state
    if (number % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const text = this.checkstatus()
    const {number} = this.state
    console.log(number)
    return (
      <div className="Div">
        <div className="subdiv">
          <h1>Count {number}</h1>
          <p>Count is {text}</p>
          <button className="btn" onClick={this.GenerateNewNum}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
