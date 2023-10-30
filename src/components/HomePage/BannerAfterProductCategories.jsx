import React from 'react';
import './BannerAfterProductCategory.css'; // Import your CSS file

const BannerAfterProductCategories = () => {
  return (
    <section className="banner-after-product-category-container">
      <div className="banner-after-product-category-banner-wrapper">
        <div className="banner-after-product-category-banner-image-wrap">
          <div className="banner-after-product-category-banner-image">
            <img
              decoding="async"
              src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-4.jpg"
              alt=""
            />
          </div>
          <div className="banner-after-product-category-banner-content">
            <div className="banner-after-product-category-banner-title-wrap">
              <h3 className="banner-after-product-category-banner-title">
                New Bangles<br /> Collection
              </h3>
            </div>
            <div className="banner-after-product-category-banner-content-text">
              Catch the highlight in the roof
            </div>
            <div className="banner-after-product-category-banner-button pls-button">
              <a href="#" target="_self" className="button btn-style-link">
                SHOP MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-after-product-category-banner-wrapper">
        <div className="banner-after-product-category-banner-image-wrap">
          <div className="banner-after-product-category-banner-image">
            <img
              decoding="async"
              src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-5.jpg"
              alt=""
            />
          </div>
          <div className="banner-after-product-category-banner-content">
            <div className="banner-after-product-category-banner-title-wrap">
              <h3 className="banner-after-product-category-banner-title">
                Culture of <br />
                Ring Design
              </h3>
            </div>
            <div className="banner-after-product-category-banner-content-text">
              Pasha de Cartier Collection.
            </div>
            <div className="banner-after-product-category-banner-button">
              <a href="#" target="_self" className="button btn-style-link">
                SHOP MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAfterProductCategories;
