import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.control}>
      <label className={classes.label} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input className={classes.input} {...props.input} />
    </div>
  );
};

export default Input;
