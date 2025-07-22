

import React, { useState } from "react";
import "../healthystyles/healthymenu.css";

// ✅ Images
import healthys1 from '../assets/hi-protein-paneer-chole-salad-bowl.jpg';
import healthys2 from '../assets/hi-proteinkalachannasaladbowl.jpg';
import healthys3 from '../assets/code-red-salad.jpg';
import healthys4 from '../assets/veggie-delight-salad.jpg';
import healthys7 from '../assets/simple-cucumber-salad.jpg';
import healthys8 from '../assets/makhanachaatsalad.jpg';
import healthys9 from '../assets/spicy-tikki-salad.jpg';
import healthys10 from '../assets/low-calorie-pasta-salad-bowl.jpg';
import healthys11 from '../assets/lobia-lentil-salad-bowl.jpg';
import healthys12 from '../assets/noodlesaladbowl.jpg';
import healthys13 from '../assets/protein-rich-rajma-salad-bowl.jpg';
import healthys14 from '../assets/protein-rich-peanut-salad.jpg';
import healthys15 from '../assets/immunity-booster-salad.jpg';
import healthys16 from '../assets/fetagreeksalad.jpg';
import healthys17 from '../assets/healthy-broccoli-mushroomsalad.jpg';
import healthys18 from '../assets/hi-Protein-hi-fibre-sprouted-salad.jpg';

import healthym5 from '../assets/berriesmilk.jpg';
import healthym6 from '../assets/mango-milk.jpg';
import healthym8 from '../assets/cold-coffee.jpg';
import healthym9 from '../assets/strawberry.jpg';
import healthym10 from '../assets/apple-milk.jpg';
import healthym7 from '../assets/darkchocolatepeanutbutter.jpg';

import healthyc7 from '../assets/watermelonsaladbowl.jpg';
import healthyc8 from '../assets/cutapplebowl.jpg';
import healthyc9 from '../assets/musk-melon-salad-bowl.jpg';
import healthyc10 from '../assets/papayafruitbowl.jpg';
import healthyc11 from '../assets/banana-fruit-bowl.jpg';
import healthyc12 from '../assets/mixed-fruit-bowl.jpg';

import healthyd1 from '../assets/green-glow-cool-detox.jpg';
import healthyd2 from '../assets/tropical-zest-detox.jpg';
import healthyd3 from '../assets/crimsoncrush.jpg';
import healthyd4 from '../assets/sunsetsqueeze.jpg';
import healthyd5 from '../assets/citruscleanse.jpg';
import healthyd6 from '../assets/applemintmist.jpg';
import healthyd7 from '../assets/summerquench.jpg';
import healthyd8 from '../assets/golden-kick.jpg';
import healthyd9 from '../assets/abc-elixir.jpg';
import healthyd10 from '../assets/glowroot.jpg';
import healthyd11 from '../assets/freshtide.jpg';

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
