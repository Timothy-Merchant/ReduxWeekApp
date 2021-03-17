import initial from "./initial"

// Helper Functions
const totalScore = ({ player1, player2 }) => player1 + player2;
const checkDeuce = ({ player1, player2, formData }) => player1 >= (formData.pointsToWin - 1) && player2 >= (formData.pointsToWin - 1);
const checkWinner = ({ player1, player2, formData }) => player1 > (formData.pointsToWin - 1) || player2 > (formData.pointsToWin - 1) ? player1 > player2 ? 1 : 2 : 0;
const checkDeuceWinner = ({ player1, player2 }) => Math.abs(player1 - player2) >= 2 ? (player1 > player2 ? 1 : 2) : 0;
const switchServer = (state) => totalScore(state) % state.formData.pointsToChange === 0 ? state.server === 1 ? 2 : 1 : state.server;
const switchServerDeuce = (state) => totalScore(state) % 2 === 0 ? state.server === 1 ? 2 : 1 : state.server;

// Reducer Functions
const increaseScore = (state, { player }) => ({ ...state, [player]: state[player] + 1 });

const changeServer = (state) => ({ ...state, server: checkDeuce(state) ? switchServerDeuce(state) : switchServer(state) })

const determineWinner = (state) => ({ ...state, winner: checkDeuce(state) ? checkDeuceWinner(state) : checkWinner(state) })

const reset = (state, { resetType }) => ({
    ...initial,
    language: state.language,
    formData: { ...state.formData },
    gameStarted: resetType === "score" || resetType === "games",
    games: resetType === "score" ? [...state.games] : initial.games
})

const setInitialValues = (state, { data }) => {
    return {
        ...initial,
        gameStarted: true,
        language: state.language,
        formData: { ...data }
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
        case "RESET": return reset(state, action);
        default: return state;
    }
};

export default reducer;