import {useState, useEffect} from 'react';
import "./CurrencyExchanger.css";
import Convert from "./components/Convert";
import Exchange from "./components/Exchange";
import Info from "./components/Info";
import API from '../../helpers/API';
import { useGlobalContext } from '../../helpers/Context';



function CurrencyExchanger() {

   // useContext global variables
  const {to, setTo} = useGlobalContext();
  const {from, setFrom} = useGlobalContext();
  const {convertedAmount, setConvertedAmount} = useGlobalContext();
  const {setCurrenciesRate} = useGlobalContext();
  const {amount, setAmount} = useGlobalContext();
  // useContext global variables
  
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [responseAmount, setResponseAmount] = useState<number>(0);

  useEffect(()=>{
    API.readAll('/latest', '').then((response)=>{
      const currenciesArr = Object.keys(response.rates);
      currenciesArr.unshift(response.base)
      setCurrencies(currenciesArr)
    }).catch((err)=>{
      console.log(err)
  })
  },[])

  const handleConvert = ()=>{
    API.readAll('/convert', `&from=${from}&to=${to}&amount=${amount}`).then((response)=>{
      setConvertedAmount(response.value)
      setResponseAmount(response.amount)
    }).catch((err)=>{
      console.log(err)
  })

  API.readAll('/latest',`&base=${from}`).then((response)=>{
    setCurrenciesRate(response.rates)
  }).catch((err)=>{
    console.log(err)
  })
  
  }
  return (
    <>
      <div className="currency-exchanger">
        <h1>Currency Exchanger</h1>
        <div className="currency-exchanger_container">
          <Exchange currencies={currencies} setAmount={setAmount} setFrom={setFrom} setTo={setTo} amount={amount} from={from} to={to}/>
          <Convert amount={amount} handleConvert={handleConvert}/>
          <Info convertedAmount={convertedAmount} from={from} to={to} amount={responseAmount}/>
        </div>
      </div>
    </>
  );
}

export default CurrencyExchanger;
