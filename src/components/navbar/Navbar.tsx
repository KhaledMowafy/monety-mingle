import './Navbar.css';
import logo from '../../assets/logo-color.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <>
    <nav className="navbar">
      <Link to="/">
       <img src={logo} alt="money-mingle logo"/>
       </Link>
       <div className="navbar__container">
            <button className="navbar_button">
                <span>EUR - USD Details</span>
            </button>
            <button role={'button'} onClick={()=>console.log('adssa')} className="navbar_button">
            <span>EUR - GBP Details</span>
            </button>
       </div>
    </nav>
   
   </>
  )
}

export default Navbar
