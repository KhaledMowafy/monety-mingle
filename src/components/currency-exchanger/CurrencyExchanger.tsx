import "./CurrencyExchanger.css";
import Convert from "./components/Convert";
import Exchange from "./components/Exchange";
import Info from "./components/Info";

function CurrencyExchanger() {
  return (
    <>
      <div className="currency-exchanger">
        <h1>Currency Exchanger</h1>
        <div className="currency-exchanger_container">
          <Exchange/>
          <Convert/>
          <Info/>
        </div>
      </div>
    </>
  );
}

export default CurrencyExchanger;
