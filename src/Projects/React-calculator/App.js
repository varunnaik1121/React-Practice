import React from "react";
import Calculator from "./comps/Calculator";
import Display from "./comps/Display";
import ButtonWrapper from "./comps/ButtonWrapper";
import "./comps/App.css";
import { useGlobal } from "./comps/context";
import Button from "./comps/Button";
const App = () => {
  const symbols = [
    [
      ["C", "+-", "%", "/"],
      [7, 8, 9, "x"],
      [4, 5, 6, "-"],
      [1, 2, 3, "+"],
      [0, ".", "="],
    ],
  ];
  const { handleClick, calc, inputRef } = useGlobal();
  return (
    <>
      <Calculator>
        <Display
          value={
            calc.num
              ? Number(calc.num).toLocaleString()
              : Number(calc.result).toLocaleString()
          }
          inputRef={inputRef}
        ></Display>
        <ButtonWrapper>
          {symbols.flat(Infinity).map((value, index) => {
            return (
              <Button
                key={index}
                className={value === "=" ? "equals" : ""}
                innerValue={value}
                handleClick={handleClick}
              ></Button>
            );
          })}
        </ButtonWrapper>
      </Calculator>
    </>
  );
};

export default App;
