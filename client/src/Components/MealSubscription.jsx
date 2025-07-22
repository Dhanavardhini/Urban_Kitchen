import React from 'react'
import MealHero from './mealsubscription/mealmain/MealHero.jsx'
import MealCard from './mealsubscription/mealmain/MealCard.jsx'
import MealPlanDuration from './mealsubscription/mealmain/MealPlanduration.jsx'
import MealCorporate from './mealsubscription/mealmain/MealCorporate.jsx'
import MealImage from './mealsubscription/mealmain/MealImage.jsx'

function MealSubscription() {
  return (
    <>
    <MealHero/>
    <MealCard/>
    <MealImage/>
    <MealPlanDuration/>
    <MealCorporate/>
      
    </>
  )
}

export default MealSubscription
