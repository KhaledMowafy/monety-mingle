type Iprops = {
    convertedAmount: number,
    from:string,
    to:string,
    amount:number
}

function Info({convertedAmount, from, to, amount}: Iprops) {
  return (
    <>
      <div className="currency-exchanger__info">
        <input className="currency-exchanger__info_exchange" type="text" placeholder="1.00 EUR = XX.XX USD" value={convertedAmount>0?`1.00 ${from} = ${(convertedAmount/amount).toFixed(2)} ${to}`: ''}/>
        <input className="currency-exchanger__info_currency" type="text" placeholder="XX.XX USD" value={`${convertedAmount.toFixed(2)} ${to}`} readOnly/>
        <button className="currency-exchanger__info_button">More Details</button>
      </div>
    </>
  );
}

export default Info;
