import { FaArrowsAltH } from "react-icons/fa";
type Iprops = {
  currencies: string[];
  setAmount: (c: number) => void;
  setFrom: (c: string) => void;
  setTo: (c: string) => void;
  amount:number,
  from:string,
  to:string
};

export default function Exchange({
  currencies,
  setAmount,
  amount,
  setFrom,
  setTo,
  from,
  to
}: Iprops) {
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };
  const handleFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFrom(e.target.value);
  };
  const handleTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTo(e.target.value);
  };
  return (
    <>
      <div className="currency-exchanger__card">
        <div className="currency-exchanger__card-item">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <div className="currency-exchanger__card-select">
          <div className="currency-exchanger__select">
            <label htmlFor="amount">From</label>
            <select onChange={handleFrom}>
              {currencies.map((item, index) =>
                index === 0 ? (
                  <option hidden key={index}>
                    {from}
                  </option>
                ) : (
                  <option value={item} key={index}>
                    {item}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="currency-exchanger__icon">
            <FaArrowsAltH />
          </div>
          <div className="currency-exchanger__select">
            <label htmlFor="amount">To</label>
            <select onChange={handleTo}>
              {currencies.map((item, index) =>
                index === 0 ? (
                  <option hidden key={index}>
                   {to}
                  </option>
                ) : (
                  <option value={item} key={index}>
                    {item}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
