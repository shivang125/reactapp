import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="footer-subscribe">
      <div className="container">
        <div className="row subscribe-wrap">
          <div className="col-12" style={{ textAlign: 'center' }}>
            <h3>Subscribe Newsletter</h3>
            <p>Sign up to our Newsletter and get the discount code.</p>
          </div>
          <div className="col-12">
            <form className="newsletter-subscribe">
              <div className="row">
                <div className="col-12" style={{ textAlign: 'center' }}>
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Email Address"
                    style={{ width: '60%', backgroundColor: 'white', color: 'black' }}
                    required
                  />
                  <input type="submit" value="Subscribe" style={{ backgroundColor: 'matte black', color: 'white', marginLeft: '10px' }} />
                </div>
              </div>
              <div className="newsletter-subscribe-response" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
