import React from 'react'
import { increaseCounter,decreaseCounter } from '../redux/counter/counterAction'
import { useSelector,useDispatch } from 'react-redux'

const Counter = () => {

  const counter  = useSelector(state =>state.counter.counter)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter : {counter} </h1>
        <button onClick={()=>dispatch(increaseCounter())}>Increase</button>
        <button onClick={()=>dispatch(decreaseCounter())}>Decrease</button>
    </div>
  )
}


export default Counter;