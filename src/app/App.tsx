import "./App.css";
import "antd/dist/antd.css";

import React from "react";
import { HashRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { Routes } from "routes";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Provider>
  );
};

export default App;
