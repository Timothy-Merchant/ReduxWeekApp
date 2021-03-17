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

export const reset = (hardReset) => {
    return {
        type: "RESET",
        hardReset: hardReset
    }
}