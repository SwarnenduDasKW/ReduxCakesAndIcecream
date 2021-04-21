import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import CakePayload from "./components/CakePayload";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <CakePayload />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
