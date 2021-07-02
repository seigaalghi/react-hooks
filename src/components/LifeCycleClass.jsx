import React, { Component } from 'react'

export class LifeCycleClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            tick : 0
        }
    }
    componentDidMount(){
        document.title = `Kamu menekan tombol ${this.state.count}`
        this.interval = setInterval(()=>{
            this.setState({
                ...this.state,
                tick : this.state.tick + 1
            })
        }, 1000)
    }
    componentDidUpdate(){
        document.title = `Kamu menekan tombol ${this.state.count}`
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    clicker = () =>{
        this.setState({
            ...this.state,
            count : this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.clicker}>Klik {this.state.count} kali</button>
                <button className="btn btn-warning">{this.state.tick}</button>
            </div>
        )
    }
}

export default LifeCycleClass
