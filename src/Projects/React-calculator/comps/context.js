import React, { createContext, useRef, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const inputRef = useRef();
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  const handleChange = (e, setstate) => {
    setstate(e.target.value);
  };
  const numbersHandler = (value) => {
    let displayValue = inputRef.current.value;

    setCalc({
      ...calc,
      num:
        calc.num === 0 && displayValue === "0"
          ? value
          : calc.num + value.toString(),
      result: !calc.sign ? 0 : calc.result,
    });
  };

  // calculate function for

  // handling the signs...
  const signHandler = (sign) => {
    setCalc({
      ...calc,
      sign: sign,
      result: !calc.result && calc.num ? calc.num : calc.result,
      num: 0,
    });
  };
  const equalsHandler = () => {
    switch (calc.sign) {
      case "+":
        setCalc({
          ...calc,
          result: parseFloat(calc.result) + parseFloat(calc.num),
          num: 0,
        });
        break;

      case "-":
        setCalc({
          ...calc,
          result: parseFloat(calc.result) - parseFloat(calc.num),
          num: 0,
        });
        break;

      case "x":
        setCalc({
          ...calc,
          result: parseFloat(calc.result) * parseFloat(calc.num),
          num: 0,
        });
        break;

      default:
        setCalc({
          ...calc,
          result: parseFloat(calc.result) / parseFloat(calc.num),
          num: 0,
        });
    }
  };
  //handling the reset button

  const resetHandler = () => {
    setCalc({
      ...calc,
      num: 0,
      sign: "",
      result: 0,
    });
  };

  const commaHandler = (value) => {
    setCalc({
      ...calc,
      num: calc.num.toString().includes(".") ? calc.num : calc.num + value,
    });
  };

  const invertHandler = () => {};

  const percentHandler = () => {};

  const handleClick = (btn) =>
    btn === "C"
      ? resetHandler()
      : btn === "+-"
      ? invertHandler()
      : btn === "%"
      ? percentHandler()
      : btn === "="
      ? equalsHandler()
      : btn === "/" || btn === "x" || btn === "+" || btn === "-"
      ? signHandler(btn)
      : btn === "."
      ? commaHandler(btn)
      : numbersHandler(btn);

  return (
    <AppContext.Provider value={{ handleChange, handleClick, calc, inputRef }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return React.useContext(AppContext);
};
export { useGlobal, AppContext, AppProvider };
