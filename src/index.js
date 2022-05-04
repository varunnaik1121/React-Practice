import ReactDOM from "react-dom";
// import App from "./backend-basics/Firebase-collection/App";
// import { Provider } from "react-redux";
// import store from "./Redux-toolkit-basics/redux/store";
import App from "./Google-Clone/App";
import { StateContextProvider } from "./Google-Clone/context/stateContextProvider";
ReactDOM.render(
  <StateContextProvider>
    <App></App>
  </StateContextProvider>,
  document.getElementById("root")
);
