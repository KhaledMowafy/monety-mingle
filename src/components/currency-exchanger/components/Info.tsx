
function Info() {
  return (
    <>
      <div className="currency-exchanger__info">
        <input className="currency-exchanger__info_exchange" type="text" placeholder="1.00 EUR = XX.XX USD" />
        <input className="currency-exchanger__info_currency" type="text" placeholder="XX.XX USD" />
        <button className="currency-exchanger__info_button">More Details</button>
      </div>
    </>
  );
}

export default Info;
