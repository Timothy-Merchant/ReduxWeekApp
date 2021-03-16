import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./data/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        changeLanguageEN={() => store.dispatch({ type: "CHANGE_LANGUAGE", language: "en" })}
        changeLanguageJP={() => store.dispatch({ type: "CHANGE_LANGUAGE", language: "jp" })}
        handleP1Increment={() => store.dispatch({ type: "INCREMENT", player: "player1" })}
        handleP2Increment={() => store.dispatch({ type: "INCREMENT", player: "player2" })}
        handleScoreReset={() => store.dispatch({ type: "RESET", hardReset: false })}
        handleReset={() => store.dispatch({ type: "RESET", hardReset: true })}
      />
    </Provider>
  </React.StrictMode>, document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
