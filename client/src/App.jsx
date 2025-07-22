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
// import Hero from './components/Hero';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Whatwedo from './components/WhatWedo';
// import Ourbrand from './components/OurBrand';
// import Order from './components/Order';
// import BirthdayMain from './components/birthdaycelebrations/BirthdayMain';
// import CorporateMain from './components/corporateevents/CorporateMain';
// import FamilyMain from './components/familygatherings/FamilyMain';
// import PartyMain from './components/partyplatters/PartyMain';
// import Carreer from './components/Carreer';
// import JusPage from './components/ourbrand/JusPage';
// import HealthyPage from './components/ourbrand/HealthyPage';
// import ProteinPage from './components/ourbrand/ProteinPage';
// import BirthdayPage from './components/birthdaycelebrations/BirthdayPage';
// import CorporatePage from './components/corporateevents/CorporatePage';
// import PartyPage from './components/partyplatters/PartyPage';
// import FamilyPage from './components/familygatherings/FamilyPage';
// import FranchiseMain from './components/franchise/FranchiseMain';
// import HealthyHome from './healthycomponents/HealthyHome';
// import JusHome from './jussections/JusHome';
// // import Pronav from './protien/pronav';
// import MealSubscription from './components/MealSubscription';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import CustomerSumbit from './components/mealsubscription/mealmain/customer/CustomerSumbit';
// import ScrollToTop from './components/ScrolltoTop';
// import WMCombo from './components/mealsubscription/mealmain/weeklymonthlycombos/WmCombo';
// import VegetarianMeal from './components/mealsubscription/mealmain/vegetarianmeal/VegetarianMeal';
// import Weightlossweightgain from './components/mealsubscription/mealmain/weightlossweightgain/WeightlossWeightgain';
// import Nutrition from './components/mealsubscription/mealmain/nutrition/Nutrition';
// import CustomerChoice from './components/mealsubscription/mealmain/customer/CustomerChoice';
// import Footer from './common-pages/Footer';

// const routes = [
//   { path: '/', element: <Hero /> },
//   { path: '/Whatwedo', element: <Whatwedo /> },
//   { path: '/Ourbrand', element: <Ourbrand /> },
//   { path: '/birthday', element: <BirthdayMain /> },
//   { path: '/corporate', element: <CorporateMain /> },
//   { path: '/family', element: <FamilyMain /> },
//   { path: '/platters', element: <PartyMain /> },
//   { path: '/Career', element: <Carreer /> },
//   { path: '/Order', element: <Order /> },
//   { path: '/Franchise', element: <FranchiseMain /> },
//   { path: '/healthy-salads', element: <HealthyHome /> },
//   { path: '/jusfriez', element: <JusHome /> },
//   // { path: '/p', element: <Pronav/> },
//   { path: '/mealsubscription', element: <MealSubscription/> },

//   { path: '/order/birthday', element: <BirthdayPage /> },
//   { path: '/order/corporate', element: <CorporatePage /> },
//   { path: '/order/family', element: <FamilyPage /> },
//   { path: '/order/partyplatters', element: <PartyPage /> },
//   { path: '/ourbrand/jusfriez', element: <JusPage /> },
//   { path: '/ourbrand/healthysalads', element: <HealthyPage /> },
//   { path: '/ourbrand/proteinxclusive', element: <ProteinPage /> },

//   // { path: '/Meal/CustomerChoice', element: <CustomerChoice/> },
//   { path: '/Meal/CustomerChoice', element: <CustomerChoice/> },
//   { path: '/Meal/Weeklyandmonthlycombos', element: <WMCombo/> },
//   { path: '/Meal/Nutrition', element: <Nutrition/> },
//   { path: '/Meal/Weightlossweightgain', element: <Weightlossweightgain/> },
//   { path: '/meal/VegetarianMeal', element: <VegetarianMeal/> },
//   { path: '/Meal/CustomerChoice/sumbit', element: <CustomerSumbit/> },
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
//         <ScrollToTop /> {/* ✅ This ensures page scrolls to top on every route change */}
//         <AppContent />
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css';

import Navbar from './common-pages/Navbar.jsx';
import Hero from './components/Hero.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Whatwedo from './components/WhatWedo.jsx';
import Ourbrand from './components/OurBrand.jsx';
import Order from './components/Order.jsx';
import BirthdayMain from './components/birthdaycelebrations/BirthdayMain.jsx';
import CorporateMain from './components/corporateevents/CorporateMain.jsx';
import FamilyMain from './components/familygatherings/FamilyMain.jsx';
import PartyMain from './components/partyplatters/PartyMain.jsx';
import Carreer from './components/Carreer.jsx';
import JusPage from './components/ourbrand/JusPage.jsx';
import HealthyPage from './components/ourbrand/HealthyPage.jsx';
import ProteinPage from './components/ourbrand/ProteinPage.jsx';
import BirthdayPage from './components/birthdaycelebrations/BirthdayPage.jsx';
import CorporatePage from './components/corporateevents/CorporatePage.jsx';
import PartyPage from './components/partyplatters/PartyPage.jsx';
import FamilyPage from './components/familygatherings/FamilyPage.jsx';
import FranchiseMain from './components/franchise/FranchiseMain.jsx';
import HealthyHome from './healthycomponents/HealthyHome.jsx';
import JusHome from './jussections/JusHome.jsx';
// import Pronav from './protien/pronav.jsx';
import MealSubscription from './components/MealSubscription.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomerSumbit from './components/mealsubscription/mealmain/customer/CustomerSumbit.jsx';
import ScrollToTop from './components/ScrolltoTop.jsx';
import WMCombo from './components/mealsubscription/mealmain/weeklymonthlycombos/WmCombo.jsx';
import VegetarianMeal from './components/mealsubscription/mealmain/vegetarianmeal/VegetarianMeal.jsx';
import Weightlossweightgain from './components/mealsubscription/mealmain/weightlossweightgain/WeightlossWeightgain.jsx';
import Nutrition from './components/mealsubscription/mealmain/nutrition/Nutrition.jsx';
import CustomerChoice from './components/mealsubscription/mealmain/customer/CustomerChoice.jsx';
import Footer from './common-pages/Footer.jsx';

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
  // { path: '/p', element: <Pronav/> },
  { path: '/mealsubscription', element: <MealSubscription/> },

  { path: '/order/birthday', element: <BirthdayPage /> },
  { path: '/order/corporate', element: <CorporatePage /> },
  { path: '/order/family', element: <FamilyPage /> },
  { path: '/order/partyplatters', element: <PartyPage /> },
  { path: '/ourbrand/jusfriez', element: <JusPage /> },
  { path: '/ourbrand/healthysalads', element: <HealthyPage /> },
  { path: '/ourbrand/proteinxclusive', element: <ProteinPage /> },

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
        <ScrollToTop />
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
