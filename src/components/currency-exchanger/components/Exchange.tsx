import { FaArrowsAltH } from "react-icons/fa";

export default function Exchange() {
  return (
    <>
         <div className="currency-exchanger__card">
            <div className="currency-exchanger__card-item">
              <label htmlFor="amount">Amount</label>
              <input id="amount" type="number" placeholder="Amount" />
            </div>
            <div className="currency-exchanger__card-select">
              <div className="currency-exchanger__select">
                <label htmlFor="amount">From</label>
                <select>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div className="currency-exchanger__icon">
                <FaArrowsAltH />
              </div>
              <div className="currency-exchanger__select">
                <label htmlFor="amount">To</label>
                <select>
                  <option value="EGP">EGP</option>
                </select>
              </div>
            </div>
          </div>
    </>
  )
}
