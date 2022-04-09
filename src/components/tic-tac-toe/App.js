import React, { useState } from "react";
import { useEffect } from "react";
import "./components/App.css";
import Board from "./components/Board";
import Header from "./components/Header";
const App = () => {
  let [board, setBoard] = useState(Array(9).fill(""));
  const [playerSymbol, setPlayerSymbol] = useState("X");
  const [bot, setBot] = useState(false);
  const [userPlaying, setUserPlaying] = useState(false);
  const [index, setIndex] = useState(null);
  const userSymbol = "X";
  const botSymbol = "O";

  const [randomDelay, setRandomDelay] = useState(0);

  const changeTurn = () => {
    playerSymbol === userSymbol
      ? setPlayerSymbol(botSymbol)
      : setPlayerSymbol(userSymbol);
  };

  const getRandomIndex = () => {
    let tempArr = [];
    board.forEach((ele, idx) => {
      if (ele === "") {
        tempArr.push(idx);
      } else {
        return;
      }
    });
    return tempArr;
  };

  const botsTurn = (bot) => {
    if (bot) {
      setUserPlaying(false);
      let random = getRandomIndex();
      if (random) {
        let randInd = random[Math.floor(Math.random() * random.length)];
        let tempBoard = [...board];
        tempBoard[randInd] = playerSymbol;

        changeTurn();
        checkWinner(tempBoard);
        setBot(false);
        setBoard(tempBoard);
      } else if (random === []) {
        alert("no more moves left");
      }
      console.log(random);
    }
  };

  const handleClick = (e, index) => {
    console.log("button clciked");
    setUserPlaying(true);
    console.log("user playing true");
    setIndex(index);
    console.log("index changed");
  };

  const getRandomDelay = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  useEffect(() => {
    let delay = getRandomDelay(800, 2000);
    setRandomDelay(delay);
  }, []);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winner = lines.reduce((memo, [a, b, c]) => {
      console.log(squares[a]);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        memo = squares[a];
      }

      return memo;
    }, "");
    if (!winner && squares.every((s) => s)) {
      winner = "tie";
      setBot(false);
      setUserPlaying(false);
    }
  };

  //running whenever the index changes
  useEffect(() => {
    if (userPlaying && bot == false) {
      console.log("user played");
      if (board[index] !== "") {
        alert("alerady clicked");
        return;
      }
      let tempArr = [...board];
      tempArr[index] = playerSymbol;

      setBoard(tempArr);
      checkWinner(tempArr);
      changeTurn();
      setBot(true);
    }
  }, [index]);

  useEffect(() => {
    setTimeout(() => {
      botsTurn(bot);
    }, randomDelay);
  }, [bot]);
  return (
    <>
      <Header />
      <div className="turn">{playerSymbol} Turn</div>
      <div className="board-container">
        {board.map((value, index) => {
          return (
            <button
              key={index}
              id={index}
              className="btn"
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default App;
