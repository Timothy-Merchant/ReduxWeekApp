import axios from "../../axios";
import { loaded, setGameID, increment } from "./state"

export const getGames = () => {
    return (dispatch) => {
        axios.get("/ping-pong/games").then(({ data }) => {
            dispatch(loaded(data.data));
        });
    };
};

export const postGame = (data) => {
    return (dispatch) => {
        axios.post("/ping-pong/games", {
            player_1: data.player1Name,
            player_2: data.player2Name,
            winning_score: data.pointsToWin,
            change_serve: data.pointsToChange,
        }).then(({ data }) => {
            dispatch(setGameID(data.data));
        })
    }
}

// accept getState as the second argument
// it's always passed in, but you don't always need it
export const patchScore = player => (dispatch, getState) => {
    // use getState function to get the state object
    // then read the currentGameID property
    const id = getState().gameID;

    axios.patch(`/ping-pong/games/${id}/score`, {
        player: player
    }).then(({ data }) => {
        dispatch(increment(player));
    });
};