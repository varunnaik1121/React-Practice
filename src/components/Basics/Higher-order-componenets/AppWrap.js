import React, { useState } from "react";

const AppWrap = (Component) =>
  function HOC() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <>
        <Component increment={() => increment()} count={count} />
      </>
    );
  };

export default AppWrap;
