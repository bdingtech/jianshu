import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style.js";
import { Iconfont } from "./static/iconfont/iconfont";
import Header from "./common/header/index";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Iconfont></Iconfont>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
      </Fragment>
    </Provider>
  );
}

export default App;
