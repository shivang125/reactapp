import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { CartItemsContext } from '../../../Context/CartItemsContext';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import { logoutAction } from "../../../redux/slices/users/usersSlice";

import './Control.css';

const Control = () => {
    const wishItems = useContext(WishItemsContext);
    const cartItems = useContext(CartItemsContext);

    const user = JSON.parse(localStorage.getItem("userInfo"));
    const dispatch = useDispatch();

    const isLoggedIn = user?.token ? true : false;
    //logout handler
    const logoutHandler = () => {
      dispatch(logoutAction());
      //reload
      window.location.reload();
    };
    return ( 
        <div className="control__bar__container">
            <div className="controls__container">
                <div className="control">
                {!isLoggedIn && (
                    <>
                      <div className="flow-root">
                        <Link
                          to="/register"
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Create an account
                        </Link>
                      </div>
                      <div className="flow-root">
                        <Link
                          to="/login"
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Sign in
                        </Link>
                      </div>
                    </>
                  )}
                </div>
                <div className="control">
                {isLoggedIn && (
                    <Link to="/wishlist">
                        <Badge badgeContent={wishItems.items.length} color="error">
                            <FavoriteBorderIcon color="black" sx={{ width: '35px'}}/>
                        </Badge>
                    </Link>
                )}
                </div>
                <div className="control">
                {isLoggedIn && (
                    <Link to="/cart" className="group -m-2 flex items-center p-2">
                        <Badge badgeContent={cartItems.items.length} color="error">
                            <ShoppingCartIcon className="h-6 w-6 flex-shrink-0 text-black-400 group-hover:tex-black-500"
                            aria-hidden="true"/>
                        </Badge>
                    </Link>
                )}
                </div>
                <div className="flex space-x-8">
                        {isLoggedIn && (
                          <div className="flex">
                            <Link
                              to="/customer-profile"
                              className="-m-2 p-2 mr-2 text-gray-400 hover:text-gray-500"
                            >
                              <UserIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </Link>
                            {/* logout */}
                            <button onClick={logoutHandler}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
            </div>
        </div>
     );
}
 
export default Control;
