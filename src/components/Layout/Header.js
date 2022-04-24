import React from "react";
import classes from "./Header.module.css";
import headerImage from "../../assets/img/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <p className={classes.header__logo}>{props.logo}</p>
        <HeaderCartButton />
      </header>
      <div className={classes["header__image-holder"]}>
        <img
          className={classes["header__image"]}
          src={headerImage}
          alt="food-img"
        />
      </div>
    </>
  );
};

export default Header;
