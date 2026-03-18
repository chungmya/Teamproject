import { useState } from "react";

//useInput 내가 만든 커스텀 훅
export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue); //초기값

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue("");
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}
