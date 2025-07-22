


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../../styles/customerchoice.css';

import CustomerSumbit from './customersumbit';

import B1 from '../../../../assets/meal/meal1.png';
import B2 from '../../../../assets/meal/meal2.png';
import B3 from '../../../../assets/meal/meal3.png';
import B4 from '../../../../assets/meal/meal4.png';
import B5 from '../../../../assets/meal/meal5.png';
import B6 from '../../../../assets/meal/meal6.png';
import B7 from '../../../../assets/meal/meal7.png';
import B8 from '../../../../assets/meal/meal1.png';
import B9 from '../../../../assets/meal/meal2.png';
import B10 from '../../../../assets/meal/meal3.png';

import L1 from '../../../../assets/meal/meal1.png';
import L2 from '../../../../assets/meal/meal2.png';
import L3 from '../../../../assets/meal/meal3.png';
import L4 from '../../../../assets/meal/meal4.png';
import L5 from '../../../../assets/meal/meal5.png';
import L6 from '../../../../assets/meal/meal6.png';
import L7 from '../../../../assets/meal/meal7.png';
import L8 from '../../../../assets/meal/meal1.png';
import L9 from '../../../../assets/meal/meal2.png';
import L10 from '../../../../assets/meal/meal3.png';

import D1 from '../../../../assets/meal/meal1.png';
import D2 from '../../../../assets/meal/meal2.png';
import D3 from '../../../../assets/meal/meal3.png';
import D4 from '../../../../assets/meal/meal4.png';
import D5 from '../../../../assets/meal/meal5.png';
import D6 from '../../../../assets/meal/meal6.png';
import D7 from '../../../../assets/meal/meal7.png';
import D8 from '../../../../assets/meal/meal1.png';
import D9 from '../../../../assets/meal/meal2.png';
import D10 from '../../../../assets/meal/meal3.png';

const data = {
  Breakfast: [
    {
      id: 'B1',
      image: B1,
      title: 'Idli with Sambar',
      desc: 'Soft idlis served with piping hot sambar and coconut chutney.',
    },
    {
      id: 'B2',
      image: B2,
      title: 'Poha Delight',
      desc: 'Flattened rice cooked with turmeric, peas, and crunchy peanuts.',
    },
    {
      id: 'B3',
      image: B3,
      title: 'Masala Dosa',
      desc: 'Crispy dosa stuffed with spicy potato filling.',
    },
    {
      id: 'B4',
      image: B4,
      title: 'Paneer Paratha',
      desc: 'Stuffed parathas with flavorful paneer and butter on top.',
    },
    {
      id: 'B5',
      image: B5,
      title: 'Upma & Chutney',
      desc: 'Rava upma served with coconut chutney and a sprinkle of ghee.',
    },
    {
      id: 'B6',
      image: B6,
      title: 'Aloo Sandwich',
      desc: 'Grilled sandwich with spicy mashed potato and veggies.',
    },
    {
      id: 'B7',
      image: B7,
      title: 'Oats Porridge',
      desc: 'Healthy oats cooked in milk with fruits and honey.',
    },
    {
      id: 'B8',
      image: B8,
      title: 'Vermicelli Upma',
      desc: 'A light and nutritious breakfast with veggies.',
    },
    {
      id: 'B9',
      image: B9,
      title: 'Egg Bhurji Toast',
      desc: 'Scrambled eggs served with crispy toast.',
    },
    {
      id: 'B10',
      image: B10,
      title: 'Banana Pancakes',
      desc: 'Fluffy banana pancakes topped with honey.',
    },
  ],
  Lunch: [
    {
      id: 'L1',
      image: L1,
      title: 'South Indian Thali',
      desc: 'A wholesome plate with rice, sambar, poriyal, and more.',
    },
    {
      id: 'L2',
      image: L2,
      title: 'Veg Fried Rice',
      desc: 'Wok-tossed rice with mixed vegetables and soy sauce.',
    },
    {
      id: 'L3',
      image: L3,
      title: 'Chapati with Dal',
      desc: 'Soft chapatis served with creamy dal tadka.',
    },
    {
      id: 'L4',
      image: L4,
      title: 'Paneer Butter Masala',
      desc: 'Rich creamy paneer curry with butter naan.',
    },
    {
      id: 'L5',
      image: L5,
      title: 'Schezwan Noodles',
      desc: 'Spicy noodles with bell peppers and spring onion.',
    },
    {
      id: 'L6',
      image: L6,
      title: 'Curd Rice & Pickle',
      desc: 'Cool curd rice topped with mustard seeds and served with pickle.',
    },
    {
      id: 'L7',
      image: L7,
      title: 'Rajma Chawal',
      desc: 'Kidney beans cooked in masala served with steamed rice.',
    },
    {
      id: 'L8',
      image: L8,
      title: 'Veg Biryani',
      desc: 'Aromatic basmati rice cooked with vegetables and spices.',
    },
    {
      id: 'L9',
      image: L9,
      title: 'Bhindi Sabzi & Roti',
      desc: 'Stir-fried okra served with fresh roti.',
    },
    {
      id: 'L10',
      image: L10,
      title: 'Mushroom Curry & Rice',
      desc: 'Savory mushroom curry paired with jeera rice.',
    },
  ],
  Dinner: [
    {
      id: 'D1',
      image: D1,
      title: 'Chapati Roll',
      desc: 'Soft chapati roll stuffed with spicy mixed veg.',
    },
    {
      id: 'D2',
      image: D2,
      title: 'Grilled Veg Sandwich',
      desc: 'Evening-style sandwich with grilled veggies & cheese.',
    },
    {
      id: 'D3',
      image: D3,
      title: 'Khichdi & Curd',
      desc: 'Light moong dal khichdi served with curd and pickle.',
    },
    {
      id: 'D4',
      image: D4,
      title: 'Spinach Pulao',
      desc: 'Mildly spiced spinach rice served with raita.',
    },
    {
      id: 'D5',
      image: D5,
      title: 'Tomato Soup & Toast',
      desc: 'Creamy tomato soup with crunchy garlic toast.',
    },
    {
      id: 'D6',
      image: D6,
      title: 'Stuffed Capsicum',
      desc: 'Bell peppers filled with spiced mashed potatoes.',
    },
    {
      id: 'D7',
      image: D7,
      title: 'Curd Semiya',
      desc: 'Cool vermicelli mixed with curd and tempered mustard.',
    },
    {
      id: 'D8',
      image: D8,
      title: 'Lemon Rice & Fryums',
      desc: 'Tangy lemon rice paired with crunchy fryums.',
    },
    {
      id: 'D9',
      image: D9,
      title: 'Palak Paneer & Roti',
      desc: 'Creamy spinach and paneer curry with soft rotis.',
    },
    {
      id: 'D10',
      image: D10,
      title: 'Mixed Veg Stew & Appam',
      desc: 'Light Kerala-style stew served with appam.',
    },
  ],
};


export default function CustomerChoice() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (item, category) => {
    const itemWithCategory = { ...item, category };
    setSelected((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, itemWithCategory]
    );
  };

  const handleSubmit = () => {
    if (selected.length === 0) {
      toast.warn('You haven’t selected any meals. Please choose at least one.', {
        position: 'top-left',
        autoClose: 3000,
      });
      return;
    }

    toast.success('Selected menu was sent successfully!', {
      position: 'top-right',
      autoClose: 2000,
    });

    setTimeout(() => {
      navigate('/Meal/CustomerChoice/sumbit', {
        state: { selectedItems: selected },
      });
    }, 2000);
  };

  return (
    <div className="customer-choice">
      <h2 className="text-center mb-4">Choose Your Meals</h2>

      {Object.entries(data).map(([category, items]) => (
        <div className="category-block mb-5" key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="grid">
            {items.map((item) => (
              <div key={item.id} className="choice-card">
                <img src={item.image} alt={item.title} />
                <div className="card-body">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                  <label>
                    <input
                      type="checkbox"
                      checked={selected.some((i) => i.id === item.id)}
                      onChange={() => handleCheckboxChange(item, category)}
                    />{' '}
                    Select
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mb-5">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Selection
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

