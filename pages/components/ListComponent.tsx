import React, {useContext} from 'react'
import { MealsContext } from '../context/MealsContext';
import {
    Grid,
    Container,
} from "@mantine/core";
import FoodCard from './FoodCard';

const ListComponent = () => {

    const {mealsDataState: {
        mealsList
    }} = useContext(MealsContext);

  return (
    <Container size="md" mt={50}>
        <Grid columns={12}>
            {
                mealsList.map((meal: any) => {
                    return (
                       <FoodCard
                        key = {meal.idMeal}
                        name={meal.strMeal}
                        image={meal.strMealThumb}
                    /> 
                    )
                })
            }
        </Grid>
    </Container>
  )
}

export default ListComponent