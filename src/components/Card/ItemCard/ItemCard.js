import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { WishItemsContext } from '../../../Context/WishItemsContext';
import './ItemCard.css';

const ItemCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cartItemsContext = useContext(CartItemsContext);
    const wishItemsContext = useContext(WishItemsContext);
  
    const handleAddToWishList = () => {
      wishItemsContext.addItem(item);
    };
  
    const handleAddToCart = () => {
      cartItemsContext.addItem(item, 1);
    };
  
    return (
      <div className="product__card__card">
        <div className="product__card">
          <div
            className="product__image"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={item.imageUrl} alt="item" className="product__img" />
          </div>
          <div className="product__card__detail">
              <div>
                  {item.category}
              </div>
            <div className="product__name">
              <Link to={`/item/${item.category}/${item.id}`}>{item.name}</Link>
            </div>
            <div className="product__description">{/* Description */}</div>
            <div className="product__price">Rs. {item.price}</div>
            <div className="product__card__action">
              <IconButton
                onClick={handleAddToWishList}
                sx={{
                  borderRadius: '20px',
                  width: '40px',
                  height: '40px',
                  marginLeft:'-10px',
                  marginTop:'10px'
                }}
              >
                <FavoriteBorderIcon
                  sx={{ width: '22px', height: '22px', color: 'black' }}
                />
              </IconButton>
              <IconButton
                onClick={handleAddToCart}
                sx={{
                  borderRadius: '20px',
                  width: '40px',
                  height: '40px',
                }}
              >
                <AddShoppingCartIcon
                  sx={{ width: '22px', height: '22px', color: 'black',marginRight:'-14px',
                  marginTop:'20px' }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
  };
 
export default ItemCard;