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
  winner: 0,
  games: []
};

const increaseScore = (state, { player }) => ({ ...state, [player]: state[player] + 1 });

const changeServer = (state) => {

  const { player1, player2, server } = state;
  const total = player1 + player2;

  return ({
    ...state, server:
      (player1 > 20 && player2 > 20) ?
        total % 2 === 0 ?
          server === 1 ? 2 : 1 : server :
        total % 5 === 0 ?
          server === 1 ? 2 : 1 : server
  })
}

const determineWinner = (state) => {

  const { player1, player2 } = state;

  return ({
    ...state, winner:
      Math.abs(player1 - player2) >= 2 ?
        player1 >= 21 ? 1 :
          player2 >= 21 ? 2
            : 0
        : 0
  })
};

const storeResult = (state) => {

  const game = {
    player1: state.player1,
    player2: state.player2,
    winner: state.winner
  };

  if (state.winner !== 0) {
    return { ...state, games: [...state.games, { ...game }] }
  }

  return { ...state }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return storeResult(determineWinner(changeServer(increaseScore(state, action))));
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
          games={state.games}
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
