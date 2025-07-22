

import React, { useState } from "react";
import "./ProMenu.css";

// ✅ Import all images
import pros1 from '../assets/px/Apple Sunset.png';
import pros2 from '../assets/px/Dry Fruit Smoothie.png';
import pros3 from '../assets/px/Crazy Chocolate.png';
import pros4 from '../assets/px/Banana Blitz.png';
import pros5 from '../assets/px/Blueberry Delight.png';
import pros6 from '../assets/px/Avocado Avengers.png';
import pros7 from '../assets/px/Magical Mango.png';
import pros8 from '../assets/px/Strawberry Storm.png';
import pros9 from '../assets/px/Merry Berry Blues.png';
import pros10 from '../assets/px/Blueberry Bliss.png';
import pros11 from '../assets/px/Apple Rush.png';



import prosb1 from '../assets/px/Apple Sunset.png';
import prosb2 from '../assets/px/Dry Fruit Smoothie.png';
import prosb3 from '../assets/px/Crazy Chocolate.png';
import prosb4 from '../assets/px/Banana Blitz.png';
import prosb5 from '../assets/px/Blueberry Delight.png';
import prosb6 from '../assets/px/Avocado Avengers.png';
import prosb7 from '../assets/px/Magical Mango.png';
import prosb8 from '../assets/px/Strawberry Storm.png';
import prosb9 from '../assets/px/Merry Berry Blues.png';
import prosb10 from '../assets/px/Blueberry Bliss.png';
import prosb11 from '../assets/px/Apple Rush.png';

const categories = [
  "Protein smoothies (250ml)",
  "Protein Smoothie Bowls",
  "Protein Shakes (250ml)",
  "All things Egg",
  "Protein oats-250ml",
  "High-protein Salads",
  "Millet Porridges",
  "Protein Sundals",
  "Protein Sandwiches",
  "Rice Bowls",
  "Protein Millet Pasta",
  "Protein Wraps & Rolls",
  "Millet Pancakes",
  "Millet waffles",
  "Fruit Salads",
  "Immunity Boosters",
  "Protein Combo Plates",
  "Protein Punch Combos"
];

const menuItems = [
  // Protein smoothies (250ml)
  { name: "Apple Sunset", category: "Protein smoothies (250ml)", image:pros1 },
  { name: "Dry Fruit Smoothie", category: "Protein smoothies (250ml)", image:pros2 },
  { name: "Crazy Chocolate", category: "Protein smoothies (250ml)", image:pros3 },
  { name: "Banana Blitz", category: "Protein smoothies (250ml)", image:pros4 },
  { name: "Blueberry Delight", category: "Protein smoothies (250ml)", image:pros5 },
  { name: "Avocado Avengers", category: "Protein smoothies (250ml)", image:pros6 },
  { name: "Magical Mango", category: "Protein smoothies (250ml)", image:pros7 },
  { name: "Strawberry Storm", category: "Protein smoothies (250ml)", image:pros8 },
  { name: "Merry Berry Blues", category: "Protein smoothies (250ml)", image:pros9 },
  { name: "Blueberry Bliss", category: "Protein smoothies (250ml)", image:pros10 },
  { name: "Apple Rush", category: "Protein smoothies (250ml)", image:pros11 },

//  "Protein Smoothie Bowls",
 
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb1 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb2 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb3 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb4 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb5 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb6 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb7 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb8 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb9 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb10 },
  { name: "Apple Sunset", category: "Protein Smoothie Bowls", image:prosb11 },


];

function ProMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="jus-menu-container">
      <h2 className="jus-menu-title">Protein Xlcusive</h2>

      <div className="jus-menu-topbar">
        <div className="jus-category-buttons-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "jus-active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="jus-view-all-right">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`jus-view-all ${selectedCategory === "All" ? "jus-active" : ""}`}
          >
            View All
          </button>
        </div>
      </div>

      <div className="jus-menu-grid">
        {filteredItems.map((item, index) => (
          <div className="jus-menu-card" key={index}>
            <div
              className={`jus-image-container ${
                item.category === "Zingy Pops (Beverages)" ? "jus-cover-top" : ""
              }`}
            >
              <img src={item.image} alt={item.name} />
            </div>
            <div className="jus-menu-content">
              <h3>{item.name}</h3>
              <a
                className="jus-swiggy-button"
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProMenu;
