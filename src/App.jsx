import './App.css'
import CashFlow from './Components/CashFlow/CashFlow.jsx'
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
          <CashFlow></CashFlow>
      </div>
    </div>
  )
}

export default App
