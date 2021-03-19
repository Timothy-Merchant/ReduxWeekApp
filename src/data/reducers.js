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
    loaded: false,
    language: state.language,
    formData: { ...state.formData },
    gameStarted: resetType === "score" || resetType === "games",
    games: resetType === "score" ? [...state.games] : initial.games
})

const setGameData = (state, action) => {
    return {
        ...initial,
        gameStarted: true,
        gameID: action.gameID,
        server: action.server,
        formData: {
            player1Name: action.player1Name,
            player2Name: action.player2Name,
            pointsToWin: action.pointsToWin,
            pointsToChange: action.pointsToChange
        }
    }
}

const loaded = (state, action) => ({
    ...state,
    loaded: true,
    games: [...action.games]
});

const updateList = (state, action) => ({
    ...state,
    games: [...state.games, action.game]
});

const refreshGames = (state, action) => ({
    ...state,
    games: state.games.filter((game, index) => game.id !== action.gameToRemove)
})

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAME_DATA": return setGameData(state, action);
        case "INCREMENT": return determineWinner(changeServer(increaseScore(state, action)));
        case "CHANGE_LANGUAGE": return { ...state, language: action.language };
        case "RESET": return reset(state, action);
        case "LOADED": return loaded(state, action);
        case "UPDATE_LIST": return updateList(state, action);
        case "REMOVE_GAME": return refreshGames(state, action);
        default: return state;
    }
};

export default reducer;