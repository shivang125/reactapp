import {
    ShoppingCartIcon
} from "@heroicons/react/24/outline";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartItemsContext } from '../../../Context/CartItemsContext';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import './Control.css';


const Control = () => {
    const wishItems = useContext(WishItemsContext)
    const cartItems = useContext(CartItemsContext);

    return ( 
        <div className="control__bar__container">
            <div className="controls__container">
                <div className="control">
                    <Link to="/login">
                        <PersonOutlineIcon color="black" size="large" sx={{ width: '35px'}}/>
                    </Link>
                </div>
                <div className="control">
                    <Link to="/wishlist">
                        <Badge badgeContent={wishItems.items.length} color="error">
                            <FavoriteBorderIcon color="black" sx={{ width: '35px'}}/>
                        </Badge>
                    </Link>
                </div>
                <div className="control">
                <Link
                          to="/cart"
                          className="group -m-2 flex items-center p-2"
                        >
                          <ShoppingCartIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            {cartItems?.length > 0 ? cartItems?.length : 0}
                          </span>
                        </Link>
                </div>
                
            </div>
        </div>
     );
}
 
export default Control;