// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import "./App.css";
// import NoResult from "./NoResult";
// import Home from "./Home";
// import Heroes from "./Heroes";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// const heroes = [
//   {
//     superHero: "Batman",
//     publisher: "Dc Comics",
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
//   },
//   {
//     superHero: "Batman",
//     publisher: "Dc Comics",
//     id: 2,
//     image:
//       "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
//   },
//   {
//     superHero: "superman",
//     publisher: "Mc Comics",
//     id: 3,
//     image:
//       "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
//   },
//   {
//     superHero: "ironman",
//     publisher: "marvel Comics",
//     id: 4,
//     image:
//       "https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg",
//   },
//   {
//     superHero: "thanos",
//     publisher: "marvel Comics",
//     id: 5,
//     image:
//       "https://static.toiimg.com/thumb/msid-54559212,width-748,height-499,resizemode=4,imgsize-307081/.jpg",
//   },
//   {
//     superHero: "wonderewoman",
//     publisher: "marvel Comics",
//     id: 6,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYdiS6o83xt08rKMnams6WzHDiETtxkYcTg&usqp=CAU",
//   },
//   {
//     superHero: "deathnote",
//     publisher: "marvel Comics",
//     id: 7,
//     image:
//       "https://images.pexels.com/photos/1280162/pexels-photo-1280162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
// ];

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [searching, setSearching] = useState(false);

//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   useEffect(() => {
//     if (debouncedSearchTerm) {
//       let filterdResults = heroes.filter((o) =>
//         o.superHero.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setResults(filterdResults);
//     } else {
//       setResults([]);
//     }
//   }, [debouncedSearchTerm]);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <Home
//               setSearchTerm={setSearchTerm}
//               results={results}
//               searchTerm={searchTerm}
//               debouncedSearchTerm={debouncedSearchTerm}
//             />
//           }
//         ></Route>
//         <Route
//           path="/heroes/:id"
//           element={<Heroes results={results} />}
//         ></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// const useDebounce = (value, delay) => {
//   const [debounceValue, setDebounceValue] = useState(null);
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebounceValue(value);
//     }, delay);
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);
//   return debounceValue;
// };

// export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const prevaName = useRef("");
  const [name, setName] = useState("");

  useEffect(() => {
    prevaName.current = "varun";
  }, [name]);
  return (
    <div className="App">
      ref value after render is : {[prevaName.current]}
      <button onClick={() => setName("nishal")}>chnage name</button>
    </div>
  );
}
