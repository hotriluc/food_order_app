import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li key={props.id} className={classes.meal}>
      <h3 className={classes["meal__title"]}>{props.name}</h3>
      <p className={classes["meal__description"]}>{props.description}</p>
      <p className={classes["meal__price"]}>${props.price}</p>
    </li>
  );
};

export default MealItem;
