import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, IconButton } from '@mui/material';
import { useContext } from 'react';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import './WishCard.css';

const WishCard = (props) => {

    const wishItems = useContext(WishItemsContext)

    const handelRemoveItem = () => {
        wishItems.removeItem(props.item)
    }

    const handelAddToCart = () => {
        wishItems.addToCart(props.item)
    };

    return ( 
        <div className="wishcard">
             <div className="wish__remove__item__icon">
                <IconButton>
                    <HighlightOffIcon onClick={handelRemoveItem}/>
                </IconButton>
            </div>
            <div className="wish__item__image">
                <img src={props.item.imageUrl} alt="item" className="wish__image"/>
            </div>
            <div className="wish__item__name">{props.item.name}</div>
            <div className="wish__item__price">${props.item.price}</div>
            <div className="add__to__cart">
                <Button variant='outlined' onClick={handelAddToCart} sx={[{'&:hover': { backgroundColor: '#FFE26E', borderColor: '#FFE26E', color: 'black'}, borderColor: 'black', backgroundColor: "black" , color: "#FFE26E"}]}>Add to cart</Button>
            </div>
        </div>
     );
}
 
export default WishCard;