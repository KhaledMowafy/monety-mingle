import "./CurrencyDetails.css";
import { useGlobalContext } from '../../helpers/Context';


function CurrencyDetails() {
  const {currenciesRate} = useGlobalContext();
  const {amount} = useGlobalContext();
  return (
    <>
    {amount > 0 && currenciesRate.USD >0?
    <>
      <div className="currency-details">
        <div className="currency-details__card">{`${(currenciesRate?.USD * amount).toFixed(2)} USD`}</div>
        <div className="currency-details__card">{`${(currenciesRate?.EUR * amount).toFixed(2)} EUR`}</div>
        <div className="currency-details__card">{`${(currenciesRate?.JPY * amount).toFixed(2)} JPY`}</div>
      </div>
      <div className="currency-details">
        <div className="currency-details__card">{`${(currenciesRate?.GBP * amount).toFixed(2)} GBP`}</div>
        <div className="currency-details__card">{`${(currenciesRate?.CNH * amount).toFixed(2)} CNH`}</div>
        <div className="currency-details__card">{`${(currenciesRate?.AUD * amount).toFixed(2)} AUD`}</div>
      </div>
      <div className="currency-details">
        <div className="currency-details__card">{`${(currenciesRate?.CAD * amount).toFixed(2)} CAD`}</div>
        <div className="currency-details__card">{`${(currenciesRate?.CHF * amount).toFixed(2)} CHF`}</div>
        <div className="currency-details__card">{`${(currenciesRate?.NZD * amount).toFixed(2)} NZD`}</div>
      </div>
      </>:
      <>
      <div className="currency-details">
      <div className="currency-details__card">{`0 USD`}</div>
      <div className="currency-details__card">{`0 EUR`}</div>
      <div className="currency-details__card">{`0 JPY`}</div>
    </div>
    <div className="currency-details">
      <div className="currency-details__card">{`0 GBP`}</div>
      <div className="currency-details__card">{`0 CNH`}</div>
      <div className="currency-details__card">{`0 AUD`}</div>
    </div>
    <div className="currency-details">
      <div className="currency-details__card">{`0 CAD`}</div>
      <div className="currency-details__card">{`0 CHF`}</div>
      <div className="currency-details__card">{`0 NZD`}</div>
    </div>
    </>
    }
    </>
  );
}

export default CurrencyDetails;
