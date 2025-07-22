// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';
// import Navbar from './common-pages/Navbar';
// import Hero from './Components/Hero';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Whatwedo from './Components/Whatwedo';
// import Ourbrand from './Components/Ourbrand';
// import Order from './Components/Order';
// import BirthdayMain from './Components/BirthdayCelebrations/BirthdayMain';
// import CorporateMain from './Components/CorporateEvents/CorporateMain';
// import FamilyMain from './Components/FamilyGatherings/FamilyMain';
// import PartyMain from './Components/PartyPlatters/PartyMain';
// import Carreer from './Components/Carreer';
// import JusPage from './Components/Ourbrand/JusPage';
// import HealthyPage from './Components/Ourbrand/HealthyPage';
// import ProteinPage from './Components/Ourbrand/ProteinPage';
// import BirthdayPage from './Components/BirthdayCelebrations/BirthdayPage';
// import CorporatePage from './Components/CorporateEvents/CorporatePage';
// import PartyPage from './Components/PartyPlatters/PartyPage';
// import FamilyPage from './Components/FamilyGatherings/FamilyPage';
// import FranchiseMain from './Components/Franchise/FranchiseMain';
// import HealthyHome from './Healthycomponents/HealthyHome';
// import JusHome from './Jussections/JusHome';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// // import '@fortawesome/fontawesome-free/css/all.min.css';



// const routes = [
//   { path: '/', element: <Hero/> },
//   { path: '/Whatwedo', element: <Whatwedo/> },
//   { path: '/Ourbrand', element: <Ourbrand/> },
//   { path: '/birthday', element: <BirthdayMain/> },
//   { path: '/order/birthday', element: <BirthdayPage/> },
//   { path: '/order/corporate', element: <CorporatePage/> },
//   { path: '/order/family', element: <FamilyPage/> },
//   { path: 'order/partyplatters', element: <PartyPage/> },
//     { path: '/ourbrand/jusfriez', element: <JusPage/> },
//     { path: '/ourbrand/healthysalads', element: <HealthyPage/> },
//     { path: '/ourbrand/proteinxclusive', element: <ProteinPage/> },
   
//   { path: '/corporate', element: <CorporateMain/> },
//   { path: '/family', element: <FamilyMain/> },
//   { path: '/platters', element: <PartyMain/> },
//   { path: '/Career', element: <Carreer/> },
//   { path: '/Order', element: <Order/> },
//   { path: '/Franchise', element: <FranchiseMain/> },
//     { path: '/healthy-salads', element: <HealthyHome /> },
//   { path: '/jusfriez', element: <JusHome /> },

// ];

// function App() {
//   return (
//     <div className="app-wrapper">
//       <Router>
//         <div className="main-content">
//           <Navbar/>
//           <Routes>
//             {routes.map(({ path, element }, index) => (
//               <Route key={index} path={path} element={element} />
//             ))}
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import './App.css';
// import Navbar from './common-pages/Navbar';
// import Hero from './Components/Hero';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Whatwedo from './Components/Whatwedo';
// import Ourbrand from './Components/Ourbrand';
// import Order from './Components/Order';
// import BirthdayMain from './Components/BirthdayCelebrations/BirthdayMain';
// import CorporateMain from './Components/CorporateEvents/CorporateMain';
// import FamilyMain from './Components/FamilyGatherings/FamilyMain';
// import PartyMain from './Components/PartyPlatters/PartyMain';
// import Carreer from './Components/Carreer';
// import JusPage from './Components/Ourbrand/JusPage';
// import HealthyPage from './Components/Ourbrand/HealthyPage';
// import ProteinPage from './Components/Ourbrand/ProteinPage';
// import BirthdayPage from './Components/BirthdayCelebrations/BirthdayPage';
// import CorporatePage from './Components/CorporateEvents/CorporatePage';
// import PartyPage from './Components/PartyPlatters/PartyPage';
// import FamilyPage from './Components/FamilyGatherings/FamilyPage';
// import FranchiseMain from './Components/Franchise/FranchiseMain';
// import HealthyHome from './Healthycomponents/HealthyHome';
// import JusHome from './Jussections/JusHome';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Pronav from './Protien/Pronav';
// import Footer from './common-pages/Footer';
// import MealSubscription from './Components/MealSubscription';

// // -----

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CustomerChoice from './Components/Mealsubscription/MealMain/Customer/CustomerChoice';
// import CustomerSumbit from './Components/Mealsubscription/MealMain/Customer/CustomerSumbit';

// // ----

// const routes = [
//   { path: '/', element: <Hero /> },
//   { path: '/Whatwedo', element: <Whatwedo /> },
//   { path: '/Ourbrand', element: <Ourbrand /> },
//   { path: '/birthday', element: <BirthdayMain /> },
//    { path: '/corporate', element: <CorporateMain /> },
//   { path: '/family', element: <FamilyMain /> },
//   { path: '/platters', element: <PartyMain /> },
//   { path: '/Career', element: <Carreer /> },
//   { path: '/Order', element: <Order /> },
//   { path: '/Franchise', element: <FranchiseMain /> },
//   { path: '/healthy-salads', element: <HealthyHome /> },
//   { path: '/jusfriez', element: <JusHome /> },
//   { path: '/p', element: <Pronav/> },
//   { path: '/mealsubscription', element: <MealSubscription/> },


//   { path: '/order/birthday', element: <BirthdayPage /> },
//   { path: '/order/corporate', element: <CorporatePage /> },
//   { path: '/order/family', element: <FamilyPage /> },
//   { path: 'order/partyplatters', element: <PartyPage /> },
//   { path: '/ourbrand/jusfriez', element: <JusPage /> },
//   { path: '/ourbrand/healthysalads', element: <HealthyPage /> },
//   { path: '/ourbrand/proteinxclusive', element: <ProteinPage /> },
 

//   { path: '/Meal/CustomerChoice', element: <CustomerChoice/> },
//   { path: '/Meal/CustomerChoice/sumbit', element: <CustomerSumbit/> },

//   // { path: '/', element: <JusHome /> },CustomerSumbit



// ];

// function AppContent() {
//   const location = useLocation();
//   const hideNavbarRoutes = ['/healthy-salads', '/jusfriez','/p'];

//   return (
//     <div className="main-content">
//       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
//       <Routes>
//         {routes.map(({ path, element }, index) => (
//           <Route key={index} path={path} element={element} />
//         ))}
//       </Routes>
//       {!hideNavbarRoutes.includes(location.pathname) && <Footer />}
      
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="app-wrapper">
//       <Router>
//         <AppContent />
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css';

import Navbar from './common-pages/Navbar';
import Hero from './Components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Whatwedo from './Components/Whatwedo';
import Ourbrand from './Components/Ourbrand';
import Order from './Components/Order';
import BirthdayMain from './Components/BirthdayCelebrations/BirthdayMain';
import CorporateMain from './Components/CorporateEvents/CorporateMain';
import FamilyMain from './Components/FamilyGatherings/FamilyMain';
import PartyMain from './Components/PartyPlatters/PartyMain';
import Carreer from './Components/Carreer';
import JusPage from './Components/Ourbrand/JusPage';
import HealthyPage from './Components/Ourbrand/HealthyPage';
import ProteinPage from './Components/Ourbrand/ProteinPage';
import BirthdayPage from './Components/BirthdayCelebrations/BirthdayPage';
import CorporatePage from './Components/CorporateEvents/CorporatePage';
import PartyPage from './Components/PartyPlatters/PartyPage';
import FamilyPage from './Components/FamilyGatherings/FamilyPage';
import FranchiseMain from './Components/Franchise/FranchiseMain';
import HealthyHome from './Healthycomponents/HealthyHome';
import JusHome from './Jussections/JusHome';
import Pronav from './Protien/Pronav';
import Footer from './common-pages/Footer';
import MealSubscription from './Components/MealSubscription';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomerSumbit from './Components/Mealsubscription/MealMain/Customer/CustomerSumbit';
import ScrollToTop from './Components/ScrollToTop';
import WMCombo from './Components/Mealsubscription/MealMain/Weekly&monthlycombos/WMCombo';
import VegetarianMeal from './Components/Mealsubscription/MealMain/Vegetarian Meal/VegetarianMeal';
import Weightlossweightgain from './Components/Mealsubscription/MealMain/Weightlossweightgain/Weightlossweightgain';
import Nutrition from './Components/Mealsubscription/MealMain/Nutrition/Nutrition';
import CustomerChoice from './Components/Mealsubscription/MealMain/Customer/CustomerChoice';

const routes = [
  { path: '/', element: <Hero /> },
  { path: '/Whatwedo', element: <Whatwedo /> },
  { path: '/Ourbrand', element: <Ourbrand /> },
  { path: '/birthday', element: <BirthdayMain /> },
  { path: '/corporate', element: <CorporateMain /> },
  { path: '/family', element: <FamilyMain /> },
  { path: '/platters', element: <PartyMain /> },
  { path: '/Career', element: <Carreer /> },
  { path: '/Order', element: <Order /> },
  { path: '/Franchise', element: <FranchiseMain /> },
  { path: '/healthy-salads', element: <HealthyHome /> },
  { path: '/jusfriez', element: <JusHome /> },
  { path: '/p', element: <Pronav/> },
  { path: '/mealsubscription', element: <MealSubscription/> },

  { path: '/order/birthday', element: <BirthdayPage /> },
  { path: '/order/corporate', element: <CorporatePage /> },
  { path: '/order/family', element: <FamilyPage /> },
  { path: '/order/partyplatters', element: <PartyPage /> },
  { path: '/ourbrand/jusfriez', element: <JusPage /> },
  { path: '/ourbrand/healthysalads', element: <HealthyPage /> },
  { path: '/ourbrand/proteinxclusive', element: <ProteinPage /> },

  // { path: '/Meal/CustomerChoice', element: <CustomerChoice/> },
  { path: '/Meal/CustomerChoice', element: <CustomerChoice/> },
  { path: '/Meal/Weeklyandmonthlycombos', element: <WMCombo/> },
  { path: '/Meal/Nutrition', element: <Nutrition/> },
  { path: '/Meal/Weightlossweightgain', element: <Weightlossweightgain/> },
  { path: '/meal/VegetarianMeal', element: <VegetarianMeal/> },
  { path: '/Meal/CustomerChoice/sumbit', element: <CustomerSumbit/> },
];

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/healthy-salads', '/jusfriez','/p'];

  return (
    <div className="main-content">
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      {!hideNavbarRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <ScrollToTop /> {/* ✅ This ensures page scrolls to top on every route change */}
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
