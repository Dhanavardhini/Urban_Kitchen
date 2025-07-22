

import React, { useState } from "react";
import "../HealthyStyles/HealthyMenu.css";

// ✅ Images
import healthys1 from '../assets/Hi-Protein-Paneer-Chole-Salad-Bowl.jpg';
import healthys2 from '../assets/Hi-Protein Kala Channa Salad Bowl.jpg';
import healthys3 from '../assets/Code-Red-Salad.jpg';
import healthys4 from '../assets/Veggie-Delight-Salad.jpg';
import healthys7 from '../assets/Simple-Cucumber-Salad.jpg';
import healthys8 from '../assets/Makhana Chaat Salad.jpg';
import healthys9 from '../assets/Spicy-Tikki-Salad.jpg';
import healthys10 from '../assets/Low-Calorie-Pasta-Salad-Bowl.jpg';
import healthys11 from '../assets/Lobia-Lentil-Salad-Bowl.jpg';
import healthys12 from '../assets/Noodle Salad Bowl.jpg';
import healthys13 from '../assets/Protein-Rich-Rajma-Salad-Bowl.jpg';
import healthys14 from '../assets/Protein-Rich-Peanut-Salad.jpg';
import healthys15 from '../assets/Immunity-Booster-Salad.jpg';
import healthys16 from '../assets/Feta Greek Salad .jpg';
import healthys17 from '../assets/Healthy-Broccoli&MushroomSalad.jpg';
import healthys18 from '../assets/Hi-Protein,Hi-Fibre-Sprouted-Salad.jpg';

import healthym5 from '../assets/Berries Milk .jpg';
import healthym6 from '../assets/Mango-Milk .jpg';
import healthym8 from '../assets/Cold Coffee .jpg';
import healthym9 from '../assets/Strawberry .jpg';
import healthym10 from '../assets/Apple-Milk.jpg';
import healthym7 from '../assets/Dark Chocolate Peanut Butter .jpg';

import healthyc7 from '../assets/Water Melon Salad Bowl.jpg';
import healthyc8 from '../assets/Mixed-Fruit-Bowl.jpg';
import healthyc9 from '../assets/Musk-Melon-Salad-Bowl.jpg';
import healthyc10 from '../assets/Papaya Fruit Bowl.jpg';
import healthyc11 from '../assets/Banana-Fruit-Bowl.jpg';
import healthyc12 from '../assets/Mixed-Fruit-Bowl.jpg';

import healthyd1 from '../assets/Green-Glow-Cool-Detox.jpg';
import healthyd2 from '../assets/Tropical-Zest-Detox.jpg';
import healthyd3 from '../assets/Crimson Crush .jpg';
import healthyd4 from '../assets/Sunset Squeeze.jpg';
import healthyd5 from '../assets/Citrus Cleanse.jpg';
import healthyd6 from '../assets/Apple Mint Mist.jpg';
import healthyd7 from '../assets/Summer Quench.jpg';
import healthyd8 from '../assets/Golden-Kick.jpg';
import healthyd9 from '../assets/ABC Elixir.jpg';
import healthyd10 from '../assets/Glow Root.jpg';
import healthyd11 from '../assets/Fresh Tide.jpg';

const categories = [
  // "All",
  "Veg & Non-Veg Salads",
  "Almond Milk With Dates & Honey (200 Ml)",
  "Cut Fruit Bowls",
  "Detox Juices",
];

const menuItems = [
  // ✅ Salads
  { name: "Hi-Protein Paneer Chole Salad Bowl", category: "Veg & Non-Veg Salads", image: healthys1 },
  { name: "Hi-Protein Kala Channa Salad Bowl", category: "Veg & Non-Veg Salads", image: healthys2 },
  { name: "Code Red Salad", category: "Veg & Non-Veg Salads", image: healthys3 },
  { name: "Veggie Delight Salad", category: "Veg & Non-Veg Salads", image: healthys4 },
  { name: "Simple Cucumber Salad", category: "Veg & Non-Veg Salads", image: healthys7 },
  { name: "Makhana Chaat Salad", category: "Veg & Non-Veg Salads", image: healthys8 },
  { name: "Spicy Tikki Salad", category: "Veg & Non-Veg Salads", image: healthys9 },
  { name: "Low - Calorie Pasta Salad Bowl", category: "Veg & Non-Veg Salads", image: healthys10 },
  { name: "Lobia Lentil Salad Bowl", category: "Veg & Non-Veg Salads", image: healthys11 },
  { name: "Noodle Salad Bowl ", category: "Veg & Non-Veg Salads", image: healthys12 },
  { name: "Protein Rich Rajma Salad Bowl", category: "Veg & Non-Veg Salads", image: healthys13 },
  { name: "Protein Rich Peanut Salad", category: "Veg & Non-Veg Salads", image: healthys14 },
  { name: "Immunity Booster Salad", category: "Veg & Non-Veg Salads", image: healthys15 },
  { name: "Feta Greek Salad ", category: "Veg & Non-Veg Salads", image: healthys16 },
  { name: "Healthy Broccoli & Mushroom Salad", category: "Veg & Non-Veg Salads", image: healthys17 },
  { name: "Hi Protein, Hi Fibre Sprouted Salad", category: "Veg & Non-Veg Salads", image: healthys18 },

  // ✅ Almond Milk
  { name: "Berries Almond Milk", category: "Almond Milk With Dates & Honey (200 Ml)", image: healthym5 },
  { name: "Mango Almond Milk", category: "Almond Milk With Dates & Honey (200 Ml)", image: healthym6 },
  { name: "Dark Chocolate Peanut Butter Almond Milk", category: "Almond Milk With Dates & Honey (200 Ml)", image: healthym7 },
  { name: "Cold Coffee Almond Milk", category: "Almond Milk With Dates & Honey (200 Ml)", image: healthym8 },
  { name: "Strawberry Almond Milk", category: "Almond Milk With Dates & Honey (200 Ml)", image: healthym9 },
  { name: " Apple Almond Milk", category: "Almond Milk With Dates & Honey (200 Ml)", image: healthym10 },

  // ✅ Cut Fruit Bowls
  { name: "Water Melon Salad Bowl", category: "Cut Fruit Bowls", image: healthyc7 },
  { name: "Cut Apple Bowl", category: "Cut Fruit Bowls", image: healthyc8 },
  { name: "Musk Melon Salad Bowl", category: "Cut Fruit Bowls", image: healthyc9 },
  { name: "Papaya Fruit Bowl", category: "Cut Fruit Bowls", image: healthyc10 },
  { name: "Banana Fruit Bowl", category: "Cut Fruit Bowls", image: healthyc11 },
  { name: "Mixed Fruit Bowl", category: "Cut Fruit Bowls", image: healthyc12 },

  // ✅ Detox Juices
  { name: "Green Glow Cool Detox", category: "Detox Juices", image: healthyd1 },
  { name: "Tropical Zest Detox", category: "Detox Juices", image: healthyd2 },
  { name: "Crimson Crush", category: "Detox Juices", image: healthyd3 },
  { name: "Sunset Squeeze", category: "Detox Juices", image: healthyd4 },
  { name: "Citrus Cleanse", category: "Detox Juices", image: healthyd5 },
  { name: "Apple Mint Mist", category: "Detox Juices", image: healthyd6 },
  { name: "Summer Quench", category: "Detox Juices", image: healthyd7 },
  { name: "Golden Kick", category: "Detox Juices", image: healthyd8 },
  { name: "Abc Elixir", category: "Detox Juices", image: healthyd9 },
  { name: "Glow Root", category: "Detox Juices", image: healthyd10 },
  { name: "Fresh Tide", category: "Detox Juices", image: healthyd11 },
];

function HealthyMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu-container">
      {/* ✅ Title */}
      <h2 className="menu-title">Healthy Salads & Detox Menu</h2>

      {/* ✅ Filter Row */}
      <div className="menu-topbar">
        <div className="category-buttons-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="view-all-right">
          <button
            onClick={() => setSelectedCategory("All")}
            className="view-all"
          >
            View All
          </button>
        </div>
      </div>

      {/* ✅ Menu Cards */}
      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <div
              className={`image-container ${
                ["Almond Milk With Dates & Honey (200 Ml)", "Detox Juices"].includes(item.category)
                  ? "cover-top"
                  : ""
              }`}
            >
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-content">
              <h3>{item.name}</h3>
              <a
                className="swiggy-button"
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

export default HealthyMenu;
