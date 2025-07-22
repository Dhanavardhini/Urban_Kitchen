

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Styles/MealCard.css';
import Meal1 from '../../../assets/Meal/Meal1.png';
import Meal2 from '../../../assets/Meal/Meal2.png';
import Meal3 from '../../../assets/Meal/Meal3.png';
import Meal4 from '../../../assets/Meal/Meal4.png';

const meals = [
  {
    id: 1,
    name: 'Individual items',
    desc: 'Tender and juicy chicken served with fragrant jasmine rice, seasoned with herbs and spices.',
    price: '$11.00',
    image: Meal1,
    path: '/Meal/CustomerChoice',
  },
  {
    id: 2,
    name: 'Weekly and monthly combos',
    desc: 'Perfectly grilled fish served with lemon butter sauce and a side of fresh veggies.',
    price: '$12.50',
    image: Meal2,
    path: '/Meal/Weeklyandmonthlycombos',
  },
  {
    id: 3,
    name: 'Vegetarian  Meal',
    desc: 'Aromatic mixed vegetable curry with a spicy kick, served with steamed basmati rice.',
    price: '$9.00',
    image: Meal3,
    path: '/meal/VegetarianMeal',
  },
  {
    id: 4,
    name: 'Weight loss, weight gain',
    desc: 'Creamy Alfredo pasta tossed with herbs, garlic, and parmesan cheese.',
    price: '$10.75',
    image: Meal4,
    path: '/Meal/Weightlossweightgain',
  },
  {
    id: 5,
    name: 'Nutrition',
    desc: 'Creamy Alfredo pasta tossed with herbs, garlic, and parmesan cheese.',
    price: '$10.75',
    image: Meal4,
    path: '/Meal/Nutrition',
  },
];

function MealCard() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="meal-section py-4 text-center">
      <h2 className="meal-title">Order Now</h2>
      <p className="meal-subtitle mx-auto">
        Choose from our delicious menu and order your meal online for fast and fresh delivery.
      </p>

      <div className="container mt-5">
        {/* First row with 3 meals */}
        <div className="row justify-content-center pt-4 ">
          {meals.slice(0, 3).map((meal) => (
            <div key={meal.id} className="col-12 col-sm-3 col-md-5 col-lg-4 col-xl-3  mb-5 d-flex">
              <div className="meal-card position-relative text-center w-100">
                <div className="meal-image">
                  <img src={meal.image} alt={meal.name} className="img-fluid rounded-circle" />
                </div>

                <div className="meal-card-content px-3 pt-5 pb-4">
                  <h5 className="meal-name">{meal.name}</h5>
                  <p className="meal-price">{meal.price}</p>
                  <p className="meal-desc">{meal.desc}</p>
                  <button className="meal-btn" onClick={() => handleClick(meal.path)}>
                    Online order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row with 2 meals */}
        <div className="row justify-content-center pt-4">
          {meals.slice(3, 5).map((meal) => (
            <div key={meal.id} className="col-12 col-sm-3 col-md-5 col-lg-4 col-xl-3 mb-5 d-flex ">
              <div className="meal-card position-relative text-center w-100">
                <div className="meal-image">
                  <img src={meal.image} alt={meal.name} className="img-fluid rounded-circle" />
                </div>

                <div className="meal-card-content px-3 pt-5 pb-4">
                  <h5 className="meal-name">{meal.name}</h5>
                  <p className="meal-price">{meal.price}</p>
                  <p className="meal-desc">{meal.desc}</p>
                  <button className="meal-btn" onClick={() => handleClick(meal.path)}>
                    Online order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MealCard;
