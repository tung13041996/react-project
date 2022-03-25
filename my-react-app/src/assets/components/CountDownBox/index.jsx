import React from 'react'
import { useState } from 'react'
import style from './styles.scss'

export default function CountDownBox(props) {
    const [count, setCount] = useState(props.number);

    const increaseNumber = () => {
        setCount(count + 1);
    }

    const decreaseNumber = () => {
        setCount(count - 1);
    }

  return (
    <div class="box">
        <h2 class="title">{props.name}</h2>
        <div class="count">
            <button onClick={decreaseNumber}>-</button>
            <span>{count}</span>
            <button onClick={increaseNumber}>+</button>
        </div>
    </div>
  )
}
