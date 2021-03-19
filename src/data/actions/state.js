export const increment = (player) => {
    return {
        type: "INCREMENT",
        player: "player" + player
    }
}

export const changeLanguage = (language) => {
    return {
        type: "CHANGE_LANGUAGE",
        language: language
    }
}

export const reset = (resetType) => {
    return {
        type: "RESET",
        resetType: resetType
    }
}

export const loaded = (data) => {
    return {
        type: "LOADED",
        games: data
    };
};

export const updateList = (data) => {
    console.log(data);
    return {
        type: "UPDATE_LIST",
        game: data
    };
};

export const setGameData = (data) => {
    return {
        type: "SET_GAME_DATA",
        gameID: data.id,
        player1Name: data.player_1.name,
        player2Name: data.player_2.name,
        server: data.player_1.serving ? 1 : 2,
        pointsToWin: data.winning_score,
        pointsToChange: data.change_serve,
    }
}

export const removeGame = (ID) => {
    return {
        type: "REMOVE_GAME",
        gameToRemove: ID
    }
}