import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./App.css"
import { decrement, increment, incrementByNum } from './redux/counter';

const App = () => {

const {count} = useSelector((state) => state.counter);
const dispatch = useDispatch();

  return (
    <div className="App">
      <div>Count is: {count}</div>
      <button
        onClick={() => dispatch(increment())}
      >Increment</button>
      <button
        onClick={() => dispatch(decrement())}
      >Decerement</button>
      <button
        onClick={() => dispatch(incrementByNum(100))}  
      >Increment by 100</button>
    </div>
  )
}

export default App
