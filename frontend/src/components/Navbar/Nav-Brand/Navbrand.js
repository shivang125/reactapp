import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './NavBrand.css';
const NavBrand = () => {
    return ( 
        <div className="flex h-18 items-center justify-between">
                  {/* Logo (lg+) */}
                    <Link to="/">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="ml-auto"
                        src={logo}
                        alt="i-novotek logo"
                      />
                    </Link>
        </div>
     );
}
export default NavBrand;