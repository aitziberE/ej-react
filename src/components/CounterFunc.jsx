import React from 'react'
import { useState } from 'react'

function CounterFunc(props) {
    const [counter, setCounter] = useState(props.initialValue || 0)
    const increment = (num) => () => {
        setCounter(counter + num)
    }
    const decrement = (num) => () => {
        setCounter(counter - num)
    }

    return (
        <div>
            <div>{counter}</div>
            <div>
                <button onClick={increment(1)}>+1</button>
                <button onClick={increment(2)}>+2</button>
                <button onClick={increment(3)}>+3</button>
                <button onClick={increment(4)}>+4</button>
                <button onClick={increment(5)}>+5</button>
                <button onClick={decrement(1)}>-1</button>
                <button onClick={decrement(2)}>-2</button>
                <button onClick={decrement(3)}>-3</button>
                <button onClick={decrement(4)}>-4</button>
                <button onClick={decrement(5)}>-5</button>
            </div>
        </div>
    )
}
 
export default CounterFunc