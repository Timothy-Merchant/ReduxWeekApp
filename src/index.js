import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import languages from "./languages.json";

const initial = {
  language: "en",
  player1: 0,
  player2: 0,
  server: 1,
  winner: 0,
  games: []
};

const increaseScore = (state, { player }) => ({ ...state, [player]: state[player] + 1 });

const changeServer = (state) => ({ ...state, server: checkDeuce(state) ? switchServerDeuce(state) : switchServer(state) })

const determineWinner = (state) => ({ ...state, winner: checkDeuce(state) ? checkDeuceWinner(state) : checkWinner(state) })

const resetGame = (state, { hardReset }) => hardReset ? initial : { ...initial, games: [...state.games] };

const storeResult = (state) => {

  if (state.winner !== 0) {
    return {
      ...state,
      games: [...state.games, {
        player1: state.player1,
        player2: state.player2,
        winner: state.winner
      }]
    }
  }

  return state;
};

const totalScore = ({ player1, player2 }) => player1 + player2;
const checkAdvantage = ({ player1, player2 }) => Math.abs(player1 - player2) >= 2;
const checkOver20 = ({ player1, player2 }) => player1 > 20 || player2 > 20;
const checkDeuce = ({ player1, player2 }) => player1 >= 20 && player2 >= 20;
const checkWinner = (state) => checkOver20(state) ? (state.player1 > state.player2 ? 1 : 2) : 0;
const checkDeuceWinner = (state) => checkAdvantage(state) ? (state.player1 > state.player2 ? 1 : 2) : 0;
const switchServer = (state) => totalScore(state) % 5 === 0 ? (state.server === 1 ? 2 : 1) : state.server;
const switchServerDeuce = (state) => totalScore(state) % 2 === 0 ? (state.server === 1 ? 2 : 1) : state.server;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return storeResult(determineWinner(changeServer(increaseScore(state, action))));
    case "CHANGE_LANGUAGE": return { ...state, language: action.language };
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
          languages={state.language === "en" ? languages.en : languages.jp}
          changeLanguageEN={() => store.dispatch({ type: "CHANGE_LANGUAGE", language: "en" })}
          changeLanguageJP={() => store.dispatch({ type: "CHANGE_LANGUAGE", language: "jp" })}
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
