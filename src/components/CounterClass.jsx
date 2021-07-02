import React, { Component } from 'react'

export class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }
    increment = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }
    reset = () =>{
        this.setState({
            count : 0
        })
    }
    render() {
        return (
            <div className="d-flex flex-column card">
                <div>{this.state.count}</div>
                <button className="btn btn-success" onClick={this.increment}>Increment</button>
                <button className="btn btn-danger" onClick={this.decrement}>Fecrement</button>
                <button className="btn btn-primary" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default CounterClass
