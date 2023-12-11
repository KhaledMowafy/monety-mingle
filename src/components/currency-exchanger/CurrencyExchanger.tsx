import {useState, useEffect} from 'react';
import "./CurrencyExchanger.css";
import Convert from "./components/Convert";
import Exchange from "./components/Exchange";
import Info from "./components/Info";
import API from '../../helpers/API';

type Iprops={
  from: string,
  amount: number,
  setFrom: React.Dispatch<React.SetStateAction<string>>,
  setAmount: React.Dispatch<React.SetStateAction<number>>

}
function CurrencyExchanger({from, amount, setFrom, setAmount}: Iprops) {
  const [currencies, setCurrencies] = useState<string[]>([]);
  // const [amount, setAmount] = useState<number>(0);
  // const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('PLN');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
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
  }
  return (
    <>
      <div className="currency-exchanger">
        <h1>Currency Exchanger</h1>
        <div className="currency-exchanger_container">
          <Exchange currencies={currencies} setAmount={setAmount} setFrom={setFrom} setTo={setTo}/>
          <Convert amount={amount} handleConvert={handleConvert}/>
          <Info convertedAmount={convertedAmount} from={from} to={to} amount={responseAmount}/>
        </div>
      </div>
    </>
  );
}

export default CurrencyExchanger;
