import React from 'react';
import { Link } from 'react-router-dom';
import "./ShopCategoryBanner.css";

const ShopCategoryBanner = () => {
  return (
    <div>
      <div className="shop-category-banner" >			
        <div className="shop-category-banner-container">
          <div className="row">
            <div className="col">
                <h1 className="shop-category-banner-title">
                  Shop	</h1>
              <div className="entry-breadcrumbs">
                <nav className="shop-category-banner-navigateToHome"><Link to="/">Home</Link><span className="shop-category-banner-navigateToShop">Shop</span></nav></div>				
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCategoryBanner
