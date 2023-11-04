import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItemsContext } from '../../../Context/CartItemsContext';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import "./ItemCard.css";
function ItemCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const cartItemsContext = useContext(CartItemsContext);
  const wishItemsContext = useContext(WishItemsContext);

  const handleAddToWishList = () => {
    wishItemsContext.addItem(product);
  };

  const handleAddToCart = () => {
    cartItemsContext.addItem(product, 1);
  };

  return (
    <div className="product__card__card">
      <div className="product__card">
        <div
          className="product__image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={product.imageUrl} alt="item" className="product__img" />
        </div>
        <div className="product__card__detail">
          <div>{product.category}</div>
          <div className="product__name">
            <Link to={`/item/${product.category}/${product.id}`}>{product.name}</Link>
          </div>
          <div className="product__description">{/* Description */}</div>
          <div className="product__price">Rs. {product.price}</div>
          <div className="product__card__action">
            <IconButton
              onClick={handleAddToWishList}
              sx={{
                borderRadius: '20px',
                width: '40px',
                height: '40px',
                marginLeft: '-10px',
                marginTop: '10px',
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
                sx={{
                  width: '22px',
                  height: '22px',
                  color: 'black',
                  marginRight: '-14px',
                  marginTop: '20px',
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
