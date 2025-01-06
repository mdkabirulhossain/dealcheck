import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Stats from './Components/Stats'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Freatures/Counters/CountersSlice'
import Posts from './Components/Posts'


function App() {
  //Use selector one of the redux hooks it's get all the data from redux store
  const counters = useSelector((state)=>state.counters);
 //get action from redux
  const dispatch = useDispatch();



  const handleIncrement = (counterId)=>{
    dispatch(increment(counterId));
  
  }
  const handleDecrement = (counterId)=>{
    dispatch(decrement(counterId));
  
  }

  const total = counters.reduce((sum, current)=> sum + current.value, 0)

  return (
    <>

      <h1 className='text-3xl font-bold text-orange-500 mx-auto'>Welcome to my Redux Project</h1>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold mt-10'> Simple Counter Application</h1>
      <div className='max-w-md mx-auto mt-10 space-y-5'>
        {
          counters.map(count =><Counter key={count.id}
          count={count.value}
          OnIncrements={()=>handleIncrement(count.id)}
          OnDecrements={()=>handleDecrement(count.id)}
          ></Counter>)
        }
        <Stats total={total}></Stats>
        <Posts></Posts>
      </div>
      
    </>
  )
}

export default App
