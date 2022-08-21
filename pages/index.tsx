import React, {useEffect} from "react";

import ListComponent from "./components/ListComponent";

interface ReposProps {
  meals: any;
}

const Home = ({meals}: ReposProps) => {
  return (
    <ListComponent data={meals}/>
  )
}

export default Home

export async function getServerSideProps() {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;
  const resp = await fetch(url);
  const body = await resp.json();
  const meals = body.meals;
  return {
    props: {
      meals
    }
  }
}
