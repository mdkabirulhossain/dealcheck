import './App.css'
import CashFlow from './Components/CashFlow/CashFlow.jsx'
import FinanceRatio from './Components/FinanceRatio/FinanceRatio.jsx'
import Financing from './Components/Financing/Financing.jsx'

import Header from './Components/Header/Header.jsx'
import Investment from './Components/Invesment/Investment.jsx'
import Purchase from './Components/Purchase/Purchase.jsx'
import PurchaseCriteria from './Components/PurchaseCriteria/PurchaseCriteria.jsx'
import Validation from './Components/Validation/Validation.jsx'

function App() {

  return (
    <div className=' bg-slate-50'>
      <div className=' mx-2 md:mx-20'>
          <Header></Header>
          <Purchase></Purchase>
          <Financing></Financing>
          <Validation></Validation>
          <CashFlow></CashFlow>
          <Investment></Investment>
          <FinanceRatio></FinanceRatio>
          <PurchaseCriteria></PurchaseCriteria>

      </div>
    </div>
  )
}

export default App
