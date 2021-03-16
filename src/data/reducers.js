import initial from "./initial"


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

export default reducer;