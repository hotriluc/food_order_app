import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.control}>
      <label className={classes.label} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} className={classes.input} {...props.input} />
    </div>
  );
});
export default Input;
