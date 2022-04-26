import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li key={props.id} className={classes.meal}>
      <div className={classes["meal__data"]}>
        <h3 className={classes["meal__title"]}>{props.name}</h3>
        <p className={classes["meal__description"]}>{props.description}</p>
        <p className={classes["meal__price"]}>${props.price}</p>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
