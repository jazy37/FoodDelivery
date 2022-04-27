import React from 'react'
import Card from '../UI/Card'

import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: "Finest fish and veggies",
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Burger',
    description: "American the best burger",
    price: 12.99
  },
  {
    id: 'm3',
    name: 'Fish',
    description: "Only fresh Fish",
    price: 8.20
  },
  {
    id: 'm4',
    name: 'Schnitzel',
    description: "German speciality",
    price: 16.5
  },
]

const AvailableMeals = () => {
  const melasList = DUMMY_MEALS.map(meal => <MealItem key={meal.id}
    name={meal.name}
    id={meal.id}
    desc={meal.description}
    price={meal.price} />)
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {melasList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals