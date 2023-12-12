import CurrencyDetails from '../../components/currency-details/CurrencyDetails';
import CurrencyExchanger from '../../components/currency-exchanger/CurrencyExchanger'
import './home.css';

function Home() {




  return (
    <>
        <div className="home">
            <CurrencyExchanger/>
            <div className="grid">
            <CurrencyDetails/>
            </div>
        </div>
    </>
  )
}

export default Home
