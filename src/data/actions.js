export const increment = (player) => {
    return {
        type: "INCREMENT",
        player: player
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

export const setInitialValues = (data) => {
    return {
        type: "SETUP_GAME",
        data: data
    }
}