import './App.css'
import Financing from './Components/Financing/Financing.jsx'

import Header from './Components/Header/Header.jsx'
import Purchase from './Components/Purchase/Purchase.jsx'
import Validation from './Components/Validation/Validation.jsx'

function App() {

  return (
    <div className=' bg-slate-50'>
      <div className='mx-20'>
          <Header></Header>
          <Purchase></Purchase>
          <Financing></Financing>
          <Validation></Validation>
      </div>
    </div>
  )
}

export default App
