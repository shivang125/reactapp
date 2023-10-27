import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './CategoryCard.css';


const CategoryCard = (props) => { 
    const containedStyle={
        '&:hover': {
            backgroundColor: 'none',
            borderColor: '#FFE26E',
            color: '#FFE26E',
          },
          borderRadius: '20px',
          borderColor: '#FFE26E',
          backgroundColor: '#FFE26E',
          color: '#000',
          fontWeight: '700',
          width: 'max-content',
          marginBottom: '25px',
    };
    return ( 
        <div className="category__card__card">
                <div className="category__image"> 
                   <img src= {props.data.image} alt="" className="product__img"/> 
                </div>
                <div className="category__card__detail">
                    <div className="category__name">
                        <span style={{  marginBottom:'25px'}}>{props.data.name}</span>
                    </div>
                    <div className="category__card__action">
                        <Link to={props.data.url}>
                            <Button variant='outlined' sx={containedStyle}>SHOP NOW</Button>
                        </Link>
                    </div>
            </div>
        </div>
     );
}
 
export default CategoryCard;