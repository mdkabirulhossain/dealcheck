import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Stats from './Components/Stats'

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2, 
    value: 0,
  }

]

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (counterId)=>{
    const UpdatedCounter = counters.map(count =>{
      if(count.id === counterId){
        return{
          ...count,
          value: count.value + 1
        }
      }
       return count;
    })

    setCounters(UpdatedCounter)
  
  }
  const handleDecrement = (counterId)=>{
    const UpdatedCounter = counters.map(count =>{
      if(count.id === counterId){
        return{
          ...count,
          value: count.value - 1
        }
      }
       return count;
    })

    setCounters(UpdatedCounter)
  
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
      </div>
    </>
  )
}

export default App
