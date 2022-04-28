import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes["header__cart-btn"]} onClick={props.onClick}>
      <span className={classes["cart-icon"]}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes["badge"]}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
