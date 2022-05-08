import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Checkout from "../Checkout/Checkout";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const itemsInCart = cartContext.items;
  const hasItems = itemsInCart.length > 0;
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const [formIsValid, setIsValid] = useState(false);

  const cartItemRemoveHandler = (id) => {
    // console.log(id);
    cartContext.removeItem(id);
  };
  const cartAddItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const isDisableHandler = (formIsValid) => {
    setIsValid(formIsValid);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {itemsInCart.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartAddItemHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes["total"]}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <Checkout
        items={itemsInCart}
        totalAmount={totalAmount}
        isDisable={isDisableHandler}
      >
        <div className={classes["actions"]}>
          <button
            className={classes["button--alt"]}
            type="button"
            onClick={props.onClose}
          >
            Close
          </button>
          {hasItems && (
            <button
              disabled={!formIsValid}
              className={classes["button"]}
              type="submit"
            >
              Order
            </button>
          )}
        </div>
      </Checkout>
    </Modal>
  );
};

export default Cart;
