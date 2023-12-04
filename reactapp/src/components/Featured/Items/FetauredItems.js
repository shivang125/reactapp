import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import ItemCard from '../../Card/ItemCard/ItemCard';
import './FeaturedItems.css';
const featuredItems = [
  {
    id: 1,
    category: 'Necklace',
    name: 'Bird of Paradise Pendant',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-2-325x325.jpg',
    price: 100000,
  },
  {
    id: 2,
    category: 'Rings',
    name: 'Kalvesna Diamond Twig Ring',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Kalvesna-Diamond-Twig-Ring-2-325x325.jpg',
    price: 100000,
  },
  {
    id: 3,
    category: 'Earrings',
    name: 'Blue Stripes & Stone Earrings',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-2-325x325.jpg',
    price: 100000,
  },
  {
    id: 4,
    category: 'Bracelets',
    name: 'Cross Stripes & Stone Bracelet',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-Stripes-Stone-Bracelet-1-325x325.jpg',
    price: 100000,
  },
  {
    id: 5,
    category: 'Bracelets',
    name: 'Cross Stripes & Stone Bracelet',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-Stripes-Stone-Bracelet-1-325x325.jpg',
    price: 100000,
  },
  {
    id: 6,
    category: 'Bracelets',
    name: 'Cross Stripes & Stone Bracelet',
    imageUrl:
      'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-Stripes-Stone-Bracelet-1-325x325.jpg',
    price: 100000,
  },
];



const FeaturedItems = (props) => {
  return (
    <div className="featured__products__container">
      <div className="featured__products">
        <div className="featured__products__header">
          <h3 className="featured__items__header__big">Featured Items </h3>
          <Link to="/shop" className="featured__header__small">
            Show all<ArrowRightAltIcon />
          </Link>
        </div>
        <div className="featured__products__header__line"></div>
        <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
          {!props.items ? (
            <ReactLoading
              type="balls"
              color="#FFE26E"
              height={100}
              width={100}
              className="m-auto"
            />
          ) : (
            <div className="featured__products__card__container">
              {featuredItems.map((item) => (
                <ItemCard key={item.id} product={item} category="featured" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
