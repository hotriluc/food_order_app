import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <li key={props.id} className={classes.meal}>
      <div className={classes["meal__data"]}>
        <h3 className={classes["meal__title"]}>{props.name}</h3>
        <p className={classes["meal__description"]}>{props.description}</p>
        <p className={classes["meal__price"]}>${props.price}</p>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
