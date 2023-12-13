import './Details.css'
import CurrencyExchanger from '../../components/currency-exchanger/CurrencyExchanger';
import { useParams } from "react-router-dom";

function Details() {
  const {id }= useParams();

  return (
    <>
    <div className='details'>
      <CurrencyExchanger id={id}/>
    </div>
        
    </>
  )
}

export default Details
