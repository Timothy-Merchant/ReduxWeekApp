import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import languages from "./languages.json";

const initial = {
  language: "jp",
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

  if (state.winner !== 0) {
    return {
      ...state, games: [...state.games, {
        player1: state.player1,
        player2: state.player2,
        winner: state.winner
      }]
    }
  }

  return { ...state }
};

const resetGame = (state, { hardReset }) => (
  hardReset ? { ...initial } : { ...initial, games: [...state.games] }
)

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return storeResult(determineWinner(changeServer(increaseScore(state, action))));
    case "CHANGE_LANGUAGE": return { ...state, language: action.lang };
    case "RESET": return resetGame(state, action);
    default: return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(persistState()));

store.subscribe(() => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <div id="root" className="container">
        <App
          language={state.language}
          languages={languages}
          changeLanguage={() => store.dispatch({ type: "CHANGE_LANGUAGE"})}          
          handleP1Increment={() => store.dispatch({ type: "INCREMENT", player: "player1" })}
          handleP2Increment={() => store.dispatch({ type: "INCREMENT", player: "player2" })}
          p1ID={1}
          p2ID={2}
          p1Score={state.player1}
          p2Score={state.player2}
          server={state.server}
          winner={state.winner}
          handleScoreReset={() => store.dispatch({ type: "RESET", hardReset: false })}
          handleReset={() => store.dispatch({ type: "RESET", hardReset: true })}
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
