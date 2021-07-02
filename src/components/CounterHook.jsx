import React, { useState } from 'react'

const CounterHook = () => {    
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className="d-flex flex-column card">
                <div>{count}</div>
                <button className="btn btn-success" onClick={increment}>Increment</button>
                <button className="btn btn-danger" onClick={decrement}>Fecrement</button>
                <button className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterHook
