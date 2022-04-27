import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const MealItemForm = (props) => {
  const inputConfig = {
    id: "amount_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={classes["form"]}>
      <Input label="Amount" input={inputConfig} />
      <Button>Add</Button>
    </form>
  );
};

export default MealItemForm;
