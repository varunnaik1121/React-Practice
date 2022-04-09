import React, { useRef } from "react";
import { useEffect, useState } from "react";
import data from "./data";
import "./App.css";

const App = () => {
  const [words, setWords] = useState([]);
  const [userTyped, setUserTyped] = useState([]);
  const inputRef = useRef(null);
  const spanRef = useRef([]);
  let [count, setCount] = useState(0);
  let [errors, setErrors] = useState(0);
  const [typing, setTyping] = useState(true);
  let [seconds, setSeconds] = useState(60);
  const [initial, setInitial] = useState(0);
  const [wpm, setWpm] = useState(0);
  let [maxTime, setMaxTime] = useState(60);
  let timer = useRef();

  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };

  const showActive = () => {
    spanRef.current[count].classList.add("active");
  };
  const getRandomParagraph = () => {
    let word = [...data[getRandomIndex(data.length)]];
    setWords(word);
  };

  const initTyping = (e) => {
    let typedChar = inputRef.current.value;
    setUserTyped([...typedChar]);
    setTyping(true);
    setInitial(initial + 1);
  };
  const clearClassName = () => {
    if (spanRef.current) {
      spanRef.current.forEach((span) => {
        span.classList.remove("active", "incorrect", "correct");
      });
      spanRef.current[count].classList.add("active");
    }
  };

  const resetState = () => {
    getRandomParagraph();
    setCount(0);
    clearInterval(timer.current);
    clearClassName();
    setTyping(true);
    setInitial(0);
    setUserTyped([]);
    inputRef.current.value = "";
    setMaxTime(60);
    setSeconds(60);
    setWpm(0);
    setErrors(0);
  };

  useEffect(() => {
    if (count >= 0) {
      if (userTyped[count]) {
        if (userTyped[count] === words[count]) {
          //adding the correct class if matches
          spanRef.current[count].classList.add("correct");
        } else {
          setErrors(errors + 1);
          spanRef.current[count].classList.add("incorrect");
        }
        setCount(count + 1);
      } else {
        if (count > 0 && userTyped[count] == null) {
          if (spanRef.current[count]) {
            if (spanRef.current[count - 1].classList.contains("incorrect")) {
              setErrors(errors - 1);
            }
          }
          setCount(count - 1);

          spanRef.current[count - 1].classList.remove("correct", "incorrect");
        }
      }
    }
  }, [userTyped]);

  useEffect(() => {
    if (typing && initial === 1) {
      timer.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (spanRef.current[count]) {
      spanRef.current.forEach((span) => {
        span.classList.remove("active");
      });
      spanRef.current[count].classList.add("active");
    }
  }, [count, typing]);

  useEffect(() => {
    if (seconds <= 1) {
      setTyping(false);

      console.log("interval cleared");
      return () => clearInterval(timer.current);
    }
  }, [seconds]);

  useEffect(() => {
    let wpmRef = Math.round(((count - errors) / 5 / (maxTime - seconds)) * 60);
    wpmRef = wpmRef < 0 || !wpmRef || wpmRef === Infinity ? 0 : wpmRef;
    setWpm(wpmRef);
    window.addEventListener("load", showActive);
    return () => window.removeEventListener("load", showActive);
  });

  useEffect(() => {
    getRandomParagraph();
    document.addEventListener("keydown", () => inputRef.current.focus());
    return () =>
      document.removeEventListener("keydown", () => inputRef.current.focus());
  }, []);

  return (
    <div className="wrapper">
      <input
        ref={inputRef}
        onInput={initTyping}
        disabled={!typing}
        className="input"
      ></input>
      <div
        onClick={() => inputRef.current.focus()}
        className="typing container"
      >
        <h3 className="title">Typing Test</h3>
        {words.map((word, index) => {
          return (
            <span
              key={index}
              ref={(ele) => {
                spanRef.current[index] = ele;
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
      <div className="footer">
        <div className="block">
          Time left : <span className="bold">{seconds}</span>s
        </div>
        <div className="block">
          Mistakes : <span className="bold">{errors}</span>
        </div>
        <div className="block">
          WPM : <span className="bold">{wpm}</span>
        </div>
        <div className="block">
          CPM : <span className="bold">{count - errors}</span>
        </div>
        <button className="btn" onClick={resetState}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default App;
