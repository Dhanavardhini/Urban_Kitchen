import React from 'react'
import MealHero from './mealsubscription/mealmain/MealHero'
import MealCard from './mealsubscription/mealmain/MealCard'
import MealPlanDuration from './mealsubscription/mealmain/MealPlanduration'
import MealCorporate from './mealsubscription/mealmain/MealCorporate'
import MealImage from './mealsubscription/mealmain/MealImage'

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
