import CurrencyDetails from '../../components/currency-details/CurrencyDetails';
import CurrencyExchanger from '../../components/currency-exchanger/CurrencyExchanger'
import {useState, useEffect} from 'react'
import API from '../../helpers/API';
import './home.css';

function Home() {
  const [from, setFrom] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [currenciesRate, setCurrenciesRate] = useState({});

  useEffect(()=>{
    if(from!==''&&amount>0){
      API.readAll('/latest',`&base=${from}`).then((response)=>{
        setCurrenciesRate(response.rates)
      })
    }

  },[amount, from])


  return (
    <>
        <div className="home">
            <CurrencyExchanger from={from} setFrom={setFrom} amount={amount} setAmount={setAmount}/>
            <div className="grid">
            <CurrencyDetails currenciesRate={currenciesRate} amount={amount}/>
            </div>
        </div>
    </>
  )
}

export default Home
