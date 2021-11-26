import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./App.css"
import { addBook, removeBook } from './redux/books';
import { decrement, increment, incrementByNum } from './redux/counter';

const App = () => {

const {counter:{count}, books:{books}} = useSelector((state) => state);

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
      <div style={{marginTop:"50px"}}>
        {books.length > 0 && books.map((item,key) => (
          <div style={{marginTop:"20px"}} key={key}>{JSON.stringify(item)}</div>
        ))}
        <div>
          <button onClick={() => dispatch(addBook({
            id:4,
            title:"Data Structure 4",
            price:4400,
            desc:"4 configureStore automatically sets up the store with good default settings Data Structure"
          }))}>Add Book</button>
          <button onClick={() => dispatch(removeBook({
            id:2
          }))}>Remove Book</button>
        </div>
      </div>
    </div>
  )
}

export default App
