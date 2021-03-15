import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
  server: 1,
  winner: 0
};

const increaseScore = (state, action) => ({ ...state, [action.player]: state[action.player] + 1 });

const changeServer = (state) => ({
  ...state, server:
    (state.player1 && state.player2 > 20) ?
      (state.player1 + state.player2) % 2 === 0 ?
        state.server === 1 ? 2 : 1 : state.server :
      (state.player1 + state.player2) % 5 === 0 ?
        state.server === 1 ? 2 : 1 : state.server
});

const determineWinner = (state) => ({
  ...state, winner:
    Math.abs(state.player1 - state.player2) >= 2 ?
      state.player1 >= 21 ? 1 :
        state.player2 >= 21 ? 2
          : 0
      : 0
});

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return determineWinner(changeServer(increaseScore(state, action)));
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

  ReactDOM.render(
    <React.StrictMode>
      <div id="root" className="container">
        <App
          handleP1Increment={() => store.dispatch({ type: "INCREMENT", player: "player1" })}
          handleP2Increment={() => store.dispatch({ type: "INCREMENT", player: "player2" })}
          p1ID={1}
          p2ID={2}
          p1Score={state.player1}
          p2Score={state.player2}
          server={state.server}
          winner={state.winner}
          handleReset={() => store.dispatch({ type: "RESET" })}
        />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );


});

store.dispatch({ type: "RESET" });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
