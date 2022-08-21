import React, {useEffect, useState, useContext} from "react";
import { Button } from "@mantine/core";
import {MealsContext} from "./context/MealsContext";

import ListComponent from "./components/ListComponent";

interface ReposProps {
  meals: any;
}

const Home = ({meals}: ReposProps) => {
  const {mealsDataState: {setMeals}} = useContext(MealsContext);
  setMeals(meals);
  return (
    <>
    <ListComponent />
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb`;
  const resp = await fetch(url);
  const body = await resp.json();
  const meals = body.meals;
  return {
    props: {
      meals
    }
  }
}
