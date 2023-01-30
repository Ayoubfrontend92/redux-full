import React from 'react'
import { increaseNumber,decreaseNumber } from '../redux/number/NumberAction'
import { useSelector,useDispatch } from 'react-redux'

const Counter = () => {

  const number  = useSelector(state =>state.number.number)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter : {number} </h1>
        <button onClick={()=>dispatch(increaseNumber())}>Increase</button>
        <button onClick={()=>dispatch(decreaseNumber())}>Decrease</button>
    </div>
  )
}


export default Counter;