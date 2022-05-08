import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const httpData = useHttp();
  const { isLoading, error, sendRequest: fetchMeals } = httpData;

  const applyData = (data) => {
    const meals = [];
    for (const mealKey in data) {
      meals.push({
        id: mealKey,
        description: data[mealKey].description,
        price: data[mealKey].price,
        name: data[mealKey].name,
      });
    }
    setMealsData(meals);
  };

  useEffect(() => {
    fetchMeals(
      {
        url: "https://react-http-430ed-default-rtdb.firebaseio.com/meals.json",
        headers: {
          "Content-Type": "application/json",
        },
      },
      applyData
    );
  }, [fetchMeals]);

  const meals = mealsData.map((meal) => {
    return (
      <Card className={classes.meal} key={meal.id}>
        <MealItem
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      </Card>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && !error ? <ul>{meals}</ul> : <p>Loading ...</p>}
      </Card>
      {error && <Card>{error}</Card>}
    </section>
  );
};

export default AvailableMeals;
