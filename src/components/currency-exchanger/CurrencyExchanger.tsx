import { useState, useEffect } from "react";
import "./CurrencyExchanger.css";
import Convert from "./components/Convert";
import Exchange from "./components/Exchange";
import Info from "./components/Info";
import API from "../../helpers/API";
import { useGlobalContext } from "../../helpers/Context";
import { Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

type Iprops = {
  id?: string;
};

function CurrencyExchanger({ id }: Iprops) {
  // useContext global variables
  const { to, setTo } = useGlobalContext();
  const { from, setFrom } = useGlobalContext();
  const { convertedAmount, setConvertedAmount } = useGlobalContext();
  const { setCurrenciesRate } = useGlobalContext();
  const { amount, setAmount } = useGlobalContext();
  // useContext global variables

  const [currencies, setCurrencies] = useState<string[]>([]);
  const [history, setHistory] = useState<number[]>([]);

  function formatDate(date = new Date()) {
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", {
      month: "2-digit",
    });
    const day = date.toLocaleString("default", { day: "2-digit" });

    return [year, month, day].join("-");
  }

  useEffect(() => {
    if (id === undefined) {
      API.readAll("/latest", "")
        .then((response) => {
          const currenciesArr = Object.keys(response.rates);
          currenciesArr.unshift(response.base);
          setCurrencies(currenciesArr);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      API.readAll("/latest", `&base=${from}`)
        .then((response) => {
          const currenciesArr = Object.keys(response.rates);
          setCurrencies(currenciesArr);
          setCurrenciesRate(response.rates);
        })
        .catch((err) => {
          console.log(err);
        });
      const d = new Date();
      d.setFullYear(d.getFullYear() - 1);

      API.readAll(
        "/historical",
        `&base=${from}&date=${formatDate(d)}&symbols=${to}`
      )
        .then((response) => {
          setHistory(Object.values(response.rates));
          console.log(Object.values(response.rates))
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id, from, to, setCurrenciesRate]);

  const handleConvert = () => {
    API.readAll("/convert", `&from=${from}&to=${to}&amount=${amount}`)
      .then((response) => {
        setConvertedAmount(response.value);
      })
      .catch((err) => {
        console.log(err);
      });

    API.readAll("/latest", `&base=${from}`)
      .then((response) => {
        setCurrenciesRate(response.rates);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const data = [
    { name: `${from}`, uv: history[0] },
    { name: `${from}`, uv: convertedAmount},
  ];

  return (
    <>
      <div className="currency-exchanger">
        {id !== undefined ? (
          <div className="details-header">
            <h1>{id}</h1>
            <Link to="/" className="currency-exchanger__info_button">
              Back to Home
            </Link>
          </div>
        ) : (
          <h1>Currency Exchanger</h1>
        )}

        <div className="currency-exchanger_container">
          <Exchange
            currencies={currencies}
            id={id}
            setAmount={setAmount}
            setFrom={setFrom}
            setTo={setTo}
            amount={amount}
            from={from}
            to={to}
          />
          <Convert amount={amount} handleConvert={handleConvert} />
          <Info
            convertedAmount={convertedAmount}
            from={from}
            to={to}
            amount={amount}
            id={id}
          />
        </div>
        {id!==undefined?
        <LineChart width={1300} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>:''}
      </div>
    </>
  );
}

export default CurrencyExchanger;
