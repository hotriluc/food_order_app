import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const sumbitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = parseInt(amountInputRef.current.value);

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  const inputConfig = {
    id: "amount_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={classes["form"]} onSubmit={sumbitHandler}>
      <Input ref={amountInputRef} label="Amount" input={inputConfig} />
      <Button type="submit">Add</Button>
      {!amountIsValid && <p>Please enter value 1-5</p>}
    </form>
  );
};

export default MealItemForm;
