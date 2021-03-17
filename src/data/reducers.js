import initial from "./initial"

// Helper Functions
const totalScore = ({ player1, player2 }) => player1 + player2;
const checkDeuce = ({ player1, player2 }) => player1 >= 20 && player2 >= 20;
const checkWinner = ({ player1, player2 }) => player1 > 20 || player2 > 20 ? player1 > player2 ? 1 : 2 : 0;
const checkDeuceWinner = ({ player1, player2 }) => Math.abs(player1 - player2) >= 2 ? (player1 > player2 ? 1 : 2) : 0;
const switchServer = (state) => totalScore(state) % 5 === 0 ? state.server === 1 ? 2 : 1 : state.server;
const switchServerDeuce = (state) => totalScore(state) % 2 === 0 ? state.server === 1 ? 2 : 1 : state.server;

// Reducer Functions
const increaseScore = (state, { player }) => ({ ...state, [player]: state[player] + 1 });

const changeServer = (state) => ({ ...state, server: checkDeuce(state) ? switchServerDeuce(state) : switchServer(state) })

const determineWinner = (state) => ({ ...state, winner: checkDeuce(state) ? checkDeuceWinner(state) : checkWinner(state) })

const resetGame = (state, { hardReset }) => hardReset ? initial : { ...initial, games: [...state.games] };

const setInitialValues = (state, { data }) => {
    return {
        ...initial,
        player1Name: data.player1Name,
        player2Name: data.player2Name,
        pointsToWin: +data.pointsToWin,
        changeServer: data.pointsToChange,
    }
};

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

const reducer = (state, action) => {
    switch (action.type) {
        case "SETUP_GAME": return setInitialValues(state, action);
        case "INCREMENT": return storeResult(determineWinner(changeServer(increaseScore(state, action))));
        case "CHANGE_LANGUAGE": return { ...state, language: action.language };
        case "RESET": return resetGame(state, action);
        default: return state;
    }
};

export default reducer;