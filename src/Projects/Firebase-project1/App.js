import React from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

import { storage } from "./Firebase/config";
import "./App.css";
const App = () => {
  console.log(storage);

  return (
    <>
      <div>hello from firebase App</div>
      <Title></Title>
      <UploadForm></UploadForm>
    </>
  );
};

export default App;
