import React from 'react';
import '../../../Styles/MealCorporate.css';
import img1 from '../../../assets/Meal/Meal1.png';
import img2 from '../../../assets/Meal/Meal2.png';
import img3 from '../../../assets/Meal/Meal3.png';
import icon1 from '../../../assets/Meal/Meal4.png';
import icon2 from '../../../assets/Meal/Meal2.png';
import icon3 from '../../../assets/Meal/Meal3.png';

function MealCorporate() {
  return (
    <div className="corporate-wrapper">
      <div className="corporate-container">
        <div className="corporate-left">
          <div className="corporate-img-grid">
            <img src={img1} alt="Tasty Burger" className="corporate-img-large" />
            <div className="corporate-img-small-group">
              <img src={img2} alt="Dessert" className="corporate-img-small" />
              <img src={img3} alt="Snacks" className="corporate-img-small" />
            </div>
          </div>
        </div>

        <div className="corporate-right">
          <h2 className="corporate-title">Corporate Meal Plans</h2>
          <div className="corporate-underline"></div>

          <div className="corporate-item">
            <img src={icon1} alt="Icon1" className="corporate-icon" />
            <div>
              <h5>Sponsored Plans</h5>
              <p>Corporate admins/HRs can sponsor healthy meal plans for their employees.</p>
            </div>
          </div>

          <div className="corporate-item">
            <img src={icon2} alt="Icon2" className="corporate-icon" />
            <div>
              <h5>Corporate Tie-Ups</h5>
              <p>Employees can enjoy discounts when companies tie-up with us for meal plans.</p>
            </div>
          </div>

          <div className="corporate-item">
            <img src={icon3} alt="Icon3" className="corporate-icon" />
            <div>
              <h5>Coupons & Passes</h5>
              <p>Employees using coupons/passes during dine-in get discounts and rewards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealCorporate;
