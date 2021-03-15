import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
};

const increaseScore = (state, action) => {
  return { ...state, [action.player]: state[action.player] + 1 }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return increaseScore(state, action);
    case "RESET": return initial;
    default: return state;
  }
};

const store = createStore(reducer, initial, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  let state = store.getState();
  console.log(state.player1);
  console.log(state.player2);
});

store.dispatch({ type: "INCREMENT" });

ReactDOM.render(
  <React.StrictMode>
    <div id="root" className="container">
      <App
        handleP1Increment={() => store.dispatch({ type: "INCREMENT", player: "player1" })}
        handleP2Increment={() => store.dispatch({ type: "INCREMENT", player: "player2" })}
        handleReset={() => store.dispatch({ type: "RESET" })}
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
