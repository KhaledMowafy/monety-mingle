import { createContext, useContext } from "react"
export type GlobalContent = {
  amount:number
  setAmount:(c:number)=>void
  to: string
  setTo:(c: string) => void
  from: string
  setFrom:(c:string) => void
  convertedAmount: number
  setConvertedAmount: (c:number) => void
  currenciesRate: {
    USD: number,
    EUR: number,
    JPY: number,
    GBP: number,
    CNH: number,
    AUD: number,
    CAD: number,
    CHF: number,
    NZD:number
  }
  setCurrenciesRate: (c:{
    USD: 0,
    EUR: 0,
    JPY: 0,
    GBP: 0,
    CNH: 0,
    AUD: 0,
    CAD: 0,
    CHF: 0,
    NZD:0
  }) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
to: 'USD', // set a default value
setTo: () => {},
from: 'EUR', // set a default value
setFrom: () => {},
convertedAmount: 0, // set a default value
setConvertedAmount: () => {},
currenciesRate: {
  USD: 0,
  EUR: 0,
  JPY: 0,
  GBP: 0,
  CNH: 0,
  AUD: 0,
  CAD: 0,
  CHF: 0,
  NZD:0
},
setCurrenciesRate: ()=>{},
amount: 0,
setAmount: ()=>{}
})
export const useGlobalContext = () => useContext(MyGlobalContext)