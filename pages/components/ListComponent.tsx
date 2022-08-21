import React from 'react'
import {
    Grid,
    Container,
} from "@mantine/core";
import FoodCard from './FoodCard';

interface ListComponentPorps {
    data: any[];
}

const ListComponent = ({data}: ListComponentPorps) => {
  return (
    <Container size="md" mt={50}>
        <Grid columns={12}>
            {
                data.map((meal: any) => {
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