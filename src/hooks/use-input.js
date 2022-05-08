import { useState } from "react";

const useInput = (validator) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validator(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
