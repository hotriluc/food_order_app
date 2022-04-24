import React from "react";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  console.log(classes);
  return <button className={classes["header__cart-btn"]}>Your cart</button>;
};

export default HeaderCartButton;
