import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold text-orange-500 mx-auto'>Welcome to my Redux Project</h1>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold mt-10'> Simple Counter Application</h1>
      <div className='max-w-md mx-auto mt-10 space-y-5'>
        <Counter />

        <Counter />
      </div>
    </>
  )
}

export default App
