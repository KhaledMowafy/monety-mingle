import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import {useState} from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import { MyGlobalContext } from './helpers/Context'
import Details from './pages/details/Details'

function App() {
  const [to, setTo] = useState<string>('USD')
  const [from, setFrom] = useState<string>('EUR')
  const [convertedAmount, setConvertedAmount] = useState<number>(0)
  const [currenciesRate, setCurrenciesRate] = useState({
    USD: 0,
    EUR: 0,
    JPY: 0,
    GBP: 0,
    CNH: 0,
    AUD: 0,
    CAD: 0,
    CHF: 0,
    NZD:0
  })
  const [amount, setAmount] = useState(0);

  return (
    <>
     <MyGlobalContext.Provider value= {{ to, setTo, from, setFrom, convertedAmount, setConvertedAmount, currenciesRate, setCurrenciesRate, amount, setAmount }}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/details/:id" element={<Details />}/>
        </Routes>
     </Router>
     </MyGlobalContext.Provider>
    </>
  )
}

export default App
