// import React from 'react';
// import '../../../Styles/MealImage.css';
// import img1 from '../../../assets/Meal/Meal1.png';
// import img2 from '../../../assets/Meal/Meal2.png';
// import img3 from '../../../assets/Meal/Meal3.png';
// import img4 from '../../../assets/Meal/Meal4.png';
// import img5 from '../../../assets/Meal/Meal5.png';
// import img6 from '../../../assets/Meal/Meal6.png';

// function MealImage() {
//   return (
//     <div className="mealimage-wrapper">
//       <h2 className="mealimage-heading">
//         Our Food <br /> <span>Featured Recipe</span>
//       </h2>
//       <p className="mealimage-description">
//         Molenienit, volupici blandi dolorum vel ipsa que debit et la plabo. Ut fugit, sediscid quis 
//         execestor seque exeris nonestrum dolluptate sim volent occae parum, eum dipsand.
//       </p>

//       <div className="mealimage-grid">
//         <img src={img1} alt="Food 1" className="meal-img" />
//         <img src={img2} alt="Food 2" className="meal-img" />
//         <img src={img3} alt="Food 3" className="meal-img" />
//         <img src={img4} alt="Food 4" className="meal-img" />
//         <img src={img5} alt="Food 5" className="meal-img" />
//         <img src={img6} alt="Food 6" className="meal-img" />
//         <img src={img3} alt="Food 3" className="meal-img" />
//         <img src={img4} alt="Food 4" className="meal-img" />
//         <img src={img5} alt="Food 5" className="meal-img" />
//         <img src={img6} alt="Food 6" className="meal-img" />
//       </div>

//       {/* <div className="mealimage-dots">
//         <span className="dot active"></span>
//         <span className="dot"></span>
//         <span className="dot"></span>
//       </div> */}
//     </div>
//   );
// }

// export default MealImage;


import React from 'react';
import '../../../Styles/MealImage.css';
import img1 from '../../../assets/Meal/Meal1.png';
import img2 from '../../../assets/Meal/Meal2.png';
import img3 from '../../../assets/Meal/Meal3.png';
import img4 from '../../../assets/Meal/Meal4.png';
import img5 from '../../../assets/Meal/Meal5.png';
import img6 from '../../../assets/Meal/Meal6.png';

function MealImage() {
  return (
    <div className="mealimage-wrapper">
      <h2 className="mealimage-heading">
        Our Food <br /> <span>Featured Recipe</span>
      </h2>
      <p className="mealimage-description">
        Molenienit, volupici blandi dolorum vel ipsa que debit et la plabo. Ut fugit, sediscid quis 
        execestor seque exeris nonestrum dolluptate sim volent occae parum, eum dipsand.
      </p>

      <div className="mealimage-grid">
        <img src={img1} alt="Food 1" className="meal-img" />
        <img src={img2} alt="Food 2" className="meal-img" />
        <img src={img3} alt="Food 3" className="meal-img" />
        <img src={img4} alt="Food 4" className="meal-img" />
        <img src={img5} alt="Food 5" className="meal-img" />
        <img src={img6} alt="Food 6" className="meal-img" />
        <img src={img3} alt="Food 3" className="meal-img" />
        <img src={img4} alt="Food 4" className="meal-img" />
        <img src={img5} alt="Food 5" className="meal-img" />
        <img src={img6} alt="Food 6" className="meal-img" />
      </div>
    </div>
  );
}

export default MealImage;
