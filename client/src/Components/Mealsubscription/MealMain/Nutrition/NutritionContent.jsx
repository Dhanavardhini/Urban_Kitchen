import React from 'react';
import "../../../../styles/nutritioncontent.css";

function NutritionContent() {
  return (
    <div className="nutrition-container">
      <h2 className="nutrition-title">Why Nutrition Matters?</h2>
      <p className="nutrition-description">
        Good nutrition is essential for maintaining overall health and well-being. A balanced diet provides the body with vital nutrients, improves immunity, supports mental health, and helps prevent chronic diseases.
      </p>

      <div className="nutrition-sections">
        <div className="nutrition-box">
          <h3>1. Energy & Strength</h3>
          <p>
            Nutrients like carbohydrates, proteins, and fats fuel your body, giving you the energy needed for daily activities and physical performance.
          </p>
        </div>
        <div className="nutrition-box">
          <h3>2. Immune Support</h3>
          <p>
            Vitamins such as C and D, and minerals like zinc, help strengthen your immune system, making your body more resilient to illnesses.
          </p>
        </div>
        <div className="nutrition-box">
          <h3>3. Mental Clarity</h3>
          <p>
            Omega-3 fatty acids, B-vitamins, and antioxidants are crucial for brain health, enhancing memory, focus, and emotional stability.
          </p>
        </div>
        <div className="nutrition-box">
          <h3>4. Disease Prevention</h3>
          <p>
            A nutrient-rich diet can help prevent chronic conditions like obesity, diabetes, heart disease, and hypertension.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NutritionContent;
