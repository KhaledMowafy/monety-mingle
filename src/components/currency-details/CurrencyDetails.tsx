import "./CurrencyDetails.css";

type Iprops = {
  currenciesRate: {
    [key: string]: number;
  };
  amount:number;
};

function CurrencyDetails({ currenciesRate, amount }: Iprops) {
  return (
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
    </>
  );
}

export default CurrencyDetails;
