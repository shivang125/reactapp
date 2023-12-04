import Navtop from '../Navbar/Container/Container';
import Navbottom from '../Navbar/Nav-Links/NavLinks';

import './Header.css';

const Header = () => {
    return ( 
        <div className='header__container'>
            <Navtop />
            <Navbottom />
        </div>
     );
}
 
export default Header;