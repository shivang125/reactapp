import React from 'react';
import './SecondaryBanner.css';

const SecondaryBanner = () => {
  return (
    <>
    <section className="secondaryBanner">
      <div className="banner-wrapper">
        <div className="banner-image-wrap">
          <div className="banner-image">
            <img decoding="async" src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-1.jpg" alt="" />
          </div>
          <div className="banner-content-wrap">
            <div className="banner-content">
              <div className="banner-subtitle-wrap">
                <span className="banner-subtitle">2021 FASHION</span>
              </div>
              <div className="banner-title-wrap">
                <h3 className="banner-title"> Just Launched<br /> Desk The Hals</h3>
              </div>
              <div className="banner-button">
                <a href="#" target="_self" className="button btn-style-link">SEE MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-wrapper">
        <div className="banner-image-wrap">
          <div className="banner-image">
            <img decoding="async" src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-2.jpg" alt="" />
          </div>
          <div className="banner-content-wrap">
            <div className="banner-content">
              <div className="banner-subtitle-wrap">
                <span className="banner-subtitle">FLAT DISCOUNT</span>
              </div>
              <div className="banner-title-wrap">
                <h3 className="banner-title"> Necklaces &amp;<br /> Body Jewels</h3>
              </div>
              <div className="banner-button">
                <a href="#" target="_self" className="button btn-style-link" style={{ color: 'white' }}>SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-wrapper">
        <div className="banner-image-wrap">
          <div className="banner-image">
            <img decoding="async" src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-3.jpg" alt="" />
          </div>
          <div className="banner-content-wrap">
            <div className="banner-content">
              <div className="banner-subtitle-wrap banner-subtitle-default">
                <span className="banner-subtitle">NEW COLLECTION</span>
              </div>
              <div className="banner-title-wrap">
                <h3 className="banner-title" style={{ color: 'white' }}> Jewelry &amp;<br /> Charm Rings</h3>
              </div>
              <div className="banner-button">
                <a href="#" target="_self" className="button btn-style-link" style={{ color: 'white' }}>SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
    </section>
    </>
  );
};

export default SecondaryBanner;
