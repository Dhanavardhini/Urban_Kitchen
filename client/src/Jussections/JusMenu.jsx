// import React, { useState } from "react";
// import "../Jusstyles/JusMenu.css";

// // ✅ Images
// import jusS1 from '../assets/jus/Veg Spring Roll.png';
// import jusS2 from '../assets/jus/Onion Rings.png';
// import jusS3 from '../assets/jus/Corn Samosa.png';
// import jusS4 from '../assets/jus/Paneer Roll.png';
// import jusS5 from '../assets/jus/Punjabi Samosa.png';
// import jusS6 from '../assets/jus/Breaded Veg Samosa.png';
// import jusS7 from '../assets/jus/Cheese Corn Nuggets.png';
// import jusS8 from '../assets/jus/Paneer Cutlet.png';
// import jusS9 from '../assets/jus/Potato Cheese Balls.png';
// import jusS10 from '../assets/jus/Aloo Tikki.png';
// import jusS11 from '../assets/jus/Cheesy Pizza Fingers.png';
// import jusS12 from '../assets/jus/Cheesy Corn Triangle.png';
// import jusS13 from '../assets/jus/Veg Cutlet.png';
// import jusS14 from '../assets/jus/Veg Samosa.png';

// //   "Non-Veg Fries & Starters",
// import jusnon1 from '../assets/jus/Crispy Spicy Chicken.png';
// import jusnon2 from '../assets/jus/Chicken Roll.png';
// import jusnon3 from '../assets/jus/Chicken Samosa.png';
// import jusnon4 from '../assets/jus/Chicken Cutlet.png';
// import jusnon5 from '../assets/jus/Crispy Chicken Fries.png';
// import jusnon6 from '../assets/jus/Chicken Strips.png';
// import jusnon7 from '../assets/jus/Chicken Nuggets.png';
// import jusnon8 from '../assets/jus/Chicken Popcorn.png';
// import jusnon9 from '../assets/jus/Chicken Seekh Kebab.png';
// import jusnon10 from '../assets/jus/Chicken Spring Roll.png';
// import jusnon11 from '../assets/jus/Chicken Cheese Ball.png';
// import jusnon12 from '../assets/jus/Chicken Garlic Finger.png';
// import jusnon13 from '../assets/jus/Chicken Lollipop.png';
// import jusnon14 from '../assets/jus/Chicken Burger Patty.png';

// //  "Nachos",
// import jusnacha1 from '../assets/jus/Zesty Jalapeno Nacho Chips.png';
// import jusnacha2 from '../assets/jus/Creamy Cheese Nacho Chips.png';
// import jusnacha3 from '../assets/jus/Mexican Chilli Nacho Chips.png';
// import jusnacha4 from '../assets/jus/Peri Peri Nacho Chips.png';

//   // "Veg Fries",
  
// import jusveg1 from '../assets/jus/French Fries.png';
// import jusveg2 from '../assets/jus/Masala French Fries.png';
// import jusveg3 from '../assets/jus/Peri Peri French Fries.png';

// // "Maggi Mania",
// import jusmag1 from '../assets/jus/Masala Maggi.png';
// import jusmag2 from '../assets/jus/Vegetable Maggi.png';
// import jusmag3 from '../assets/jus/Cheese Maggi.png';
// import jusmag4 from '../assets/jus/Chicken Cheese Maggi.png';
// import jusmag5 from '../assets/jus/Egg Cheese Maggi.png';

//   // "Buckets & Value Combos",
// import jusbuc1 from '../assets/jus/Salted French Friez Bucket.png';
// import jusbuc2 from '../assets/jus/Peri Peri French Friez Bucket.png';
// import jusbuc3 from '../assets/jus/Crispy Chicken Friez Bucket.png';
// import jusbuc4 from '../assets/jus/Chicken Lollipop Bucket.png';
// import jusbuc5 from '../assets/jus/Chicken Popcorn Bucket.png';
// import jusbuc6 from '../assets/jus/Non-Veg Momo Bucket.png';
// import jusbuc7 from '../assets/jus/Veg Momo Bucket.png';

// // Zingy Pops (Beverages)juspops1

// import juspops1 from '../assets/jus/Zesty Cran Zing.png';
// import juspops2 from '../assets/jus/Blush Rush.png';
// import juspops3 from '../assets/jus/Purple Pop.png';
// import juspops4 from '../assets/jus/Mojigreen (Green Apple).png';
// import juspops5 from '../assets/jus/Lime Crime.png';
// import juspops6 from '../assets/jus/Orange Soda.png';
// import juspops7 from '../assets/jus/Pine Fizzler.png';
// import juspops8 from '../assets/jus/CrushBerry.png';
// import juspops9 from '../assets/jus/Palm Pop.png';

//   // "Momos" 
// import jusmomo1 from '../assets/jus/Mixed Veg Momos.png';
// import jusmomo2 from '../assets/jus/Paneer Tikka Momos.png';
// import jusmomo3 from '../assets/jus/Veg Schezwan Momos.png';
// import jusmomo4 from '../assets/jus/Corn & Cheese Momos.png';
// import jusmomo5 from '../assets/jus/Chicken Tikka Momos.png';
// import jusmomo6 from '../assets/jus/Chicken Peri Peri Momos.png';
// import jusmomo7 from '../assets/jus/Chicken Schezwan Momos.png';


// const categories = [
//   "All",
//   "Snacks & Starters",
//   "Non-Veg Fries & Starters",
//   "Nachos",
//   "Veg Fries",
//   "Maggi Mania",
//   "Buckets & Value Combos",
//   "Zingy Pops (Beverages)",
//   "Momos"
// ];

// const menuItems = [
//   // Example category updated
//   { name: " Veg Spring Roll (5 pcs)", category: "Snacks & Starters", image:jusS1 },
//   { name: "Onion Rings (8 pcs)", category: "Snacks & Starters", image: jusS2 },
//   { name: "Corn Samosa (5 pcs)", category: "Snacks & Starters", image: jusS3 },
//   { name: "Paneer Roll (3 pcs)", category: "Snacks & Starters", image: jusS4 },
//   { name: "Punjabi Samosa (5 pcs)", category: "Snacks & Starters", image: jusS5 },
//   { name: "Breaded Veg Samosa (5 pcs)", category: "Snacks & Starters", image: jusS6 },
//   { name: "Cheese Corn Nuggets (5 pcs)", category: "Snacks & Starters", image: jusS7 },
//   { name: "Paneer Cutlet (5 pcs)", category: "Snacks & Starters", image: jusS8 },
//   { name: "Potato Cheese Balls (5 pcs)", category: "Snacks & Starters", image: jusS9 },
//   { name: "Aloo Tikki (5 pcs)", category: "Snacks & Starters", image: jusS10 },
//   { name: "Cheesy Pizza Fingers (5 pcs)", category: "Snacks & Starters", image: jusS11 },
//   { name: "Cheesy Corn Triangle (5 pcs)", category: "Snacks & Starters", image: jusS12 },
//   { name: "Veg Cutlet (5 pcs)", category: "Snacks & Starters", image: jusS13 },
//   { name: "Veg Samosa (5 pcs)", category: "Snacks & Starters", image: jusS14 },

// //   "Non-Veg Fries & Starters",

//   { name: "Crispy Spicy Chicken", category: "Non-Veg Fries & Starters", image: jusnon1 },
//   { name: "Chicken Roll (3 pcs)", category: "Non-Veg Fries & Starters", image: jusnon2 },
//   { name: "Chicken Samosa (5 pcs)", category: "Non-Veg Fries & Starters", image: jusnon3 },
//   { name: "Chicken Cutlet", category: "Non-Veg Fries & Starters", image: jusnon4 },
//   { name: "Crispy Chicken Fries (8 pcs)", category: "Non-Veg Fries & Starters", image: jusnon5 },
//   { name: "Chicken Strips (5 pcs)", category: "Non-Veg Fries & Starters", image: jusnon6 },
//   { name: "Chicken Nuggets (5 pcs)", category: "Non-Veg Fries & Starters", image: jusnon7 },
//   { name: "Chicken Popcorn (15 pcs)", category: "Non-Veg Fries & Starters", image: jusnon8 },
//   { name: "Chicken Seekh Kebab (3 pcs)", category: "Non-Veg Fries & Starters", image: jusnon9 },
//   { name: "Chicken Spring Roll (3 pcs)", category: "Non-Veg Fries & Starters", image: jusnon10 },
//   { name: "Chicken Cheese Ball (8 pcs)", category: "Non-Veg Fries & Starters", image: jusnon11 },
//   { name: "Chicken Garlic Finger (10 pcs)", category: "Non-Veg Fries & Starters", image: jusnon12 },
//   { name: "Chicken Lollipop (5 pcs)", category: "Non-Veg Fries & Starters", image: jusnon13 },
//   { name: "Chicken Burger Patty (3 pcs)", category: "Non-Veg Fries & Starters", image: jusnon14 },

//   //  "Nachos",
//   { name: "Zesty Jalapeno Nacho Chips", category: "Nachos", image: jusnacha1 },
//    { name: "Creamy Cheese Nacho Chips", category: "Nachos", image: jusnacha2 },
//   { name: "Mexican Chilli Nacho Chips", category: "Nachos", image: jusnacha3 },
//   { name: "Peri Peri Nacho Chips", category: "Nachos", image: jusnacha4 },

//   // "Veg Fries",
//   { name: "French Fries (9 mm)", category: "Veg Fries", image: jusveg1 },
//   { name: "Masala French Fries", category: "Veg Fries", image: jusveg2 },
//   { name: "Peri Peri French Fries", category: "Veg Fries", image: jusveg3 },

//   // "Maggi Mania",
//   { name: "Masala Maggi", category: "Maggi Mania", image: jusmag1 },
//   { name: "Vegetable Maggi", category: "Maggi Mania", image: jusmag2 },
//   { name: "Cheese Maggi", category: "Maggi Mania", image: jusmag3 },
//   { name: "Chicken Cheese Maggi", category: "Maggi Mania", image: jusmag4 },
//   { name: "Egg Cheese Maggi", category: "Maggi Mania", image: jusmag5 },

//   // "Buckets & Value Combos",
//   { name: "Salted French Friez Bucket", category: "Buckets & Value Combos", image: jusbuc1 },
//   { name: "Peri Peri French Friez Bucket", category: "Buckets & Value Combos", image: jusbuc2 },
//   { name: "Crispy Chicken Friez Bucket", category: "Buckets & Value Combos", image: jusbuc3 },
//   { name: "Chicken Lollipop Bucket", category: "Buckets & Value Combos", image: jusbuc4 },
//   { name: "Chicken Popcorn Bucket", category: "Buckets & Value Combos", image: jusbuc5 },
//   { name: "Non-Veg Momo Bucket", category: "Buckets & Value Combos", image: jusbuc6 },
//   { name: "Veg Momo Bucket", category: "Buckets & Value Combos", image: jusbuc7 },

//   // Zingy Pops (Beverages)

//   { name: "Zesty Cran Zing", category: "Zingy Pops (Beverages)", image: juspops1 },
//   { name: "Blush Rush", category: "Zingy Pops (Beverages)", image: juspops2 },
//   { name: "Purple Pop", category: "Zingy Pops (Beverages)", image: juspops3 },
//   { name: "Mojigreen (Green Apple)", category: "Zingy Pops (Beverages)", image: juspops4 },
//   { name: "Lime Crime (Lemon & Mint)", category: "Zingy Pops (Beverages)", image: juspops5 },
//   { name: "Orange Soda", category: "Zingy Pops (Beverages)", image: juspops6 },
//   { name: "Pine Fizzler", category: "Zingy Pops (Beverages)", image: juspops7 },
//   { name: "CrushBerry (Strawberry)", category: "Zingy Pops (Beverages)", image: juspops8 },
//   { name: "Palm Pop (Pina Colada)", category: "Zingy Pops (Beverages)", image: juspops9 },

//   // "Momos"

//   { name: "Mixed Veg Momos (5 pcs)", category: "Momos", image: jusmomo1 },
//   { name: "Paneer Tikka Momos (5 pcs)", category: "Momos", image: jusmomo2 },
//   { name: "Veg Schezwan Momos (5 pcs)", category: "Momos", image: jusmomo3 },
//   { name: "Corn & Cheese Momos (5 pcs)", category: "Momos", image: jusmomo4 },
//   { name: "Chicken Tikka Momos (5 pcs)", category: "Momos", image: jusmomo5 },
//   { name: "Chicken Peri Peri Momos (5 pcs) ", category: "Momos", image: jusmomo6 },
//   { name: "Chicken Schezwan Momos (5 pcs)", category: "Momos", image: jusmomo7 },


// ];

// function JusMenu() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredItems =
//     selectedCategory === "All"
//       ? menuItems
//       : menuItems.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="jus-menu-container">
//       <h2 className="jus-menu-title">Jus Friez</h2>

//       <div className="jus-menu-topbar">
//         <div className="jus-category-buttons-left">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={selectedCategory === cat ? "jus-active" : ""}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//         <div className="jus-view-all-right">
//           <button
//             onClick={() => setSelectedCategory("All")}
//             className="jus-view-all"
//           >
//             View All
//           </button>
//         </div>
//       </div>

//       <div className="jus-menu-grid">
//         {filteredItems.map((item, index) => (
//           <div className="jus-menu-card" key={index}>
//             <div
//               className={`jus-image-container ${
//                 ["Zingy Pops (Beverages)"].includes(item.category)
//                   ? "jus-cover-top"
//                   : ""
//               }`}
//             >
//               <img src={item.image} alt={item.name} />
//             </div>
//             <div className="jus-menu-content">
//               <h3>{item.name}</h3>
//               <a
//                 className="jus-swiggy-button"
//                 href="https://www.swiggy.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Order on Swiggy
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default JusMenu;

import React, { useState } from "react";
import "../Jusstyles/JusMenu.css";

// ✅ Import all images
import jusS1 from '../assets/jus/Veg Spring Roll.png';
import jusS2 from '../assets/jus/Onion Rings.png';
import jusS3 from '../assets/jus/Corn Samosa.png';
import jusS4 from '../assets/jus/Paneer Roll.png';
import jusS5 from '../assets/jus/Punjabi Samosa.png';
import jusS6 from '../assets/jus/Breaded Veg Samosa.png';
import jusS7 from '../assets/jus/Cheese Corn Nuggets.png';
import jusS8 from '../assets/jus/Paneer Cutlet.png';
import jusS9 from '../assets/jus/Potato Cheese Balls.png';
import jusS10 from '../assets/jus/Aloo Tikki.png';
import jusS11 from '../assets/jus/Cheesy Pizza Fingers.png';
import jusS12 from '../assets/jus/Cheesy Corn Triangle.png';
import jusS13 from '../assets/jus/Veg Cutlet.png';
import jusS14 from '../assets/jus/Veg Samosa.png';

import jusnon1 from '../assets/jus/Crispy Spicy Chicken.png';
import jusnon2 from '../assets/jus/Chicken Roll.png';
import jusnon3 from '../assets/jus/Chicken Samosa.png';
import jusnon4 from '../assets/jus/Chicken Cutlet.png';
import jusnon5 from '../assets/jus/Crispy Chicken Fries.png';
import jusnon6 from '../assets/jus/Chicken Strips.png';
import jusnon7 from '../assets/jus/Chicken Nuggets.png';
import jusnon8 from '../assets/jus/Chicken Popcorn.png';
import jusnon9 from '../assets/jus/Chicken Seekh Kebab.png';
import jusnon10 from '../assets/jus/Chicken Spring Roll.png';
import jusnon11 from '../assets/jus/Chicken Cheese Ball.png';
import jusnon12 from '../assets/jus/Chicken Garlic Finger.png';
import jusnon13 from '../assets/jus/Chicken Lollipop.png';
import jusnon14 from '../assets/jus/Chicken Burger Patty.png';

import jusnacha1 from '../assets/jus/Zesty Jalapeno Nacho Chips.png';
import jusnacha2 from '../assets/jus/Creamy Cheese Nacho Chips.png';
import jusnacha3 from '../assets/jus/Mexican Chilli Nacho Chips.png';
import jusnacha4 from '../assets/jus/Peri Peri Nacho Chips.png';

import jusveg1 from '../assets/jus/French Fries.png';
import jusveg2 from '../assets/jus/Masala French Fries.png';
import jusveg3 from '../assets/jus/Peri Peri French Fries.png';

import jusmag1 from '../assets/jus/Masala Maggi.png';
import jusmag2 from '../assets/jus/Vegetable Maggi.png';
import jusmag3 from '../assets/jus/Cheese Maggi.png';
import jusmag4 from '../assets/jus/Chicken Cheese Maggi.png';
import jusmag5 from '../assets/jus/Egg Cheese Maggi.png';

import jusbuc1 from '../assets/jus/Salted French Friez Bucket.png';
import jusbuc2 from '../assets/jus/Peri Peri French Friez Bucket.png';
import jusbuc3 from '../assets/jus/Crispy Chicken Friez Bucket.png';
import jusbuc4 from '../assets/jus/Chicken Lollipop Bucket.png';
import jusbuc5 from '../assets/jus/Chicken Popcorn Bucket.png';
import jusbuc6 from '../assets/jus/Non-Veg Momo Bucket.png';
import jusbuc7 from '../assets/jus/Veg Momo Bucket.png';

import juspops1 from '../assets/jus/Zesty Cran Zing.png';
import juspops2 from '../assets/jus/Blush Rush.png';
import juspops3 from '../assets/jus/Purple Pop.png';
import juspops4 from '../assets/jus/Mojigreen (Green Apple).png';
import juspops5 from '../assets/jus/Lime Crime.png';
import juspops6 from '../assets/jus/Orange Soda.png';
import juspops7 from '../assets/jus/Pine Fizzler.png';
import juspops8 from '../assets/jus/CrushBerry.png';
import juspops9 from '../assets/jus/Palm Pop.png';

import jusmomo1 from '../assets/jus/Mixed Veg Momos.png';
import jusmomo2 from '../assets/jus/Paneer Tikka Momos.png';
import jusmomo3 from '../assets/jus/Veg Schezwan Momos.png';
import jusmomo4 from '../assets/jus/Corn & Cheese Momos.png';
import jusmomo5 from '../assets/jus/Chicken Tikka Momos.png';
import jusmomo6 from '../assets/jus/Chicken Peri Peri Momos.png';
import jusmomo7 from '../assets/jus/Chicken Schezwan Momos.png';

const categories = [
  "Snacks & Starters",
  "Non-Veg Fries & Starters",
  "Nachos",
  "Veg Fries",
  "Maggi Mania",
  "Buckets & Value Combos",
  "Zingy Pops (Beverages)",
  "Momos"
];

const menuItems = [
  // Example category updated
  { name: " Veg Spring Roll (5 pcs)", category: "Snacks & Starters", image:jusS1 },
  { name: "Onion Rings (8 pcs)", category: "Snacks & Starters", image: jusS2 },
  { name: "Corn Samosa (5 pcs)", category: "Snacks & Starters", image: jusS3 },
  { name: "Paneer Roll (3 pcs)", category: "Snacks & Starters", image: jusS4 },
  { name: "Punjabi Samosa (5 pcs)", category: "Snacks & Starters", image: jusS5 },
  { name: "Breaded Veg Samosa (5 pcs)", category: "Snacks & Starters", image: jusS6 },
  { name: "Cheese Corn Nuggets (5 pcs)", category: "Snacks & Starters", image: jusS7 },
  { name: "Paneer Cutlet (5 pcs)", category: "Snacks & Starters", image: jusS8 },
  { name: "Potato Cheese Balls (5 pcs)", category: "Snacks & Starters", image: jusS9 },
  { name: "Aloo Tikki (5 pcs)", category: "Snacks & Starters", image: jusS10 },
  { name: "Cheesy Pizza Fingers (5 pcs)", category: "Snacks & Starters", image: jusS11 },
  { name: "Cheesy Corn Triangle (5 pcs)", category: "Snacks & Starters", image: jusS12 },
  { name: "Veg Cutlet (5 pcs)", category: "Snacks & Starters", image: jusS13 },
  { name: "Veg Samosa (5 pcs)", category: "Snacks & Starters", image: jusS14 },

//   "Non-Veg Fries & Starters",

  { name: "Crispy Spicy Chicken", category: "Non-Veg Fries & Starters", image: jusnon1 },
  { name: "Chicken Roll (3 pcs)", category: "Non-Veg Fries & Starters", image: jusnon2 },
  { name: "Chicken Samosa (5 pcs)", category: "Non-Veg Fries & Starters", image: jusnon3 },
  { name: "Chicken Cutlet", category: "Non-Veg Fries & Starters", image: jusnon4 },
  { name: "Crispy Chicken Fries (8 pcs)", category: "Non-Veg Fries & Starters", image: jusnon5 },
  { name: "Chicken Strips (5 pcs)", category: "Non-Veg Fries & Starters", image: jusnon6 },
  { name: "Chicken Nuggets (5 pcs)", category: "Non-Veg Fries & Starters", image: jusnon7 },
  { name: "Chicken Popcorn (15 pcs)", category: "Non-Veg Fries & Starters", image: jusnon8 },
  { name: "Chicken Seekh Kebab (3 pcs)", category: "Non-Veg Fries & Starters", image: jusnon9 },
  { name: "Chicken Spring Roll (3 pcs)", category: "Non-Veg Fries & Starters", image: jusnon10 },
  { name: "Chicken Cheese Ball (8 pcs)", category: "Non-Veg Fries & Starters", image: jusnon11 },
  { name: "Chicken Garlic Finger (10 pcs)", category: "Non-Veg Fries & Starters", image: jusnon12 },
  { name: "Chicken Lollipop (5 pcs)", category: "Non-Veg Fries & Starters", image: jusnon13 },
  { name: "Chicken Burger Patty (3 pcs)", category: "Non-Veg Fries & Starters", image: jusnon14 },

  //  "Nachos",
  { name: "Zesty Jalapeno Nacho Chips", category: "Nachos", image: jusnacha1 },
   { name: "Creamy Cheese Nacho Chips", category: "Nachos", image: jusnacha2 },
  { name: "Mexican Chilli Nacho Chips", category: "Nachos", image: jusnacha3 },
  { name: "Peri Peri Nacho Chips", category: "Nachos", image: jusnacha4 },

  // "Veg Fries",
  { name: "French Fries (9 mm)", category: "Veg Fries", image: jusveg1 },
  { name: "Masala French Fries", category: "Veg Fries", image: jusveg2 },
  { name: "Peri Peri French Fries", category: "Veg Fries", image: jusveg3 },

  // "Maggi Mania",
  { name: "Masala Maggi", category: "Maggi Mania", image: jusmag1 },
  { name: "Vegetable Maggi", category: "Maggi Mania", image: jusmag2 },
  { name: "Cheese Maggi", category: "Maggi Mania", image: jusmag3 },
  { name: "Chicken Cheese Maggi", category: "Maggi Mania", image: jusmag4 },
  { name: "Egg Cheese Maggi", category: "Maggi Mania", image: jusmag5 },

  // "Buckets & Value Combos",
  { name: "Salted French Friez Bucket", category: "Buckets & Value Combos", image: jusbuc1 },
  { name: "Peri Peri French Friez Bucket", category: "Buckets & Value Combos", image: jusbuc2 },
  { name: "Crispy Chicken Friez Bucket", category: "Buckets & Value Combos", image: jusbuc3 },
  { name: "Chicken Lollipop Bucket", category: "Buckets & Value Combos", image: jusbuc4 },
  { name: "Chicken Popcorn Bucket", category: "Buckets & Value Combos", image: jusbuc5 },
  { name: "Non-Veg Momo Bucket", category: "Buckets & Value Combos", image: jusbuc6 },
  { name: "Veg Momo Bucket", category: "Buckets & Value Combos", image: jusbuc7 },

  // Zingy Pops (Beverages)

  { name: "Zesty Cran Zing", category: "Zingy Pops (Beverages)", image: juspops1 },
  { name: "Blush Rush", category: "Zingy Pops (Beverages)", image: juspops2 },
  { name: "Purple Pop", category: "Zingy Pops (Beverages)", image: juspops3 },
  { name: "Mojigreen (Green Apple)", category: "Zingy Pops (Beverages)", image: juspops4 },
  { name: "Lime Crime (Lemon & Mint)", category: "Zingy Pops (Beverages)", image: juspops5 },
  { name: "Orange Soda", category: "Zingy Pops (Beverages)", image: juspops6 },
  { name: "Pine Fizzler", category: "Zingy Pops (Beverages)", image: juspops7 },
  { name: "CrushBerry (Strawberry)", category: "Zingy Pops (Beverages)", image: juspops8 },
  { name: "Palm Pop (Pina Colada)", category: "Zingy Pops (Beverages)", image: juspops9 },

  // "Momos"

  { name: "Mixed Veg Momos (5 pcs)", category: "Momos", image: jusmomo1 },
  { name: "Paneer Tikka Momos (5 pcs)", category: "Momos", image: jusmomo2 },
  { name: "Veg Schezwan Momos (5 pcs)", category: "Momos", image: jusmomo3 },
  { name: "Corn & Cheese Momos (5 pcs)", category: "Momos", image: jusmomo4 },
  { name: "Chicken Tikka Momos (5 pcs)", category: "Momos", image: jusmomo5 },
  { name: "Chicken Peri Peri Momos (5 pcs) ", category: "Momos", image: jusmomo6 },
  { name: "Chicken Schezwan Momos (5 pcs)", category: "Momos", image: jusmomo7 },


];

function JusMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="jus-menu-container">
      <h2 className="jus-menu-title">Jus Friez</h2>

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

export default JusMenu;
