import { useEffect } from "react";
import useInput from "../../hooks/use-input";

const Checkout = (props) => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPhoneNumber,
    valueIsValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    onChangeHandler: phoneNumberChangeHandler,
    onBlurHandler: phoneNumberBlurHandler,
    reset: phoneNumberReset,
  } = useInput((value) => value.trim() !== "");

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";
  const phoneNumberInputClasses = phoneNumberHasError
    ? "form-control invalid"
    : "form-control";

  const formIsValid =
    nameIsValid && emailIsValid && phoneNumberIsValid ? true : false;

  props.isDisable(formIsValid);

  const submitHandler = (event) => {
    event.preventDefault();
    nameReset();
    emailReset();
    phoneNumberReset();
  };

  return (
    <form>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && <p className="error-text">Name is invalid</p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="name"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <p className="error-text">Email is invalid</p>}
        </div>
        <div className={phoneNumberInputClasses}>
          <label htmlFor="name">Phone number</label>
          <input
            type="text"
            id="name"
            value={enteredPhoneNumber}
            onChange={phoneNumberChangeHandler}
            onBlur={phoneNumberBlurHandler}
          />
          {phoneNumberHasError && (
            <p className="error-text">Phone number is invalid</p>
          )}
        </div>
      </div>
      {props.children}
    </form>
  );
};

export default Checkout;
