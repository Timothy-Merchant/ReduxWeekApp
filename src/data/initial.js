const initial = {
    loaded: false,
    gameStarted: false,
    gameID: 0,
    formData: {
        player1Name: "",
        player2Name: "",
        pointsToWin: 21,
        pointsToChange: 5,
    },
    language: "en",
    player1: 0,
    player2: 0,
    server: 1,
    winner: 0,
    games: []
};

export default initial