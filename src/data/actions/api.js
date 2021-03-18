import axios from "../../axios";
import { loaded, setGameData, increment, removeGame } from "./state"

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
            dispatch(setGameData(data.data));
        })
    }
}

export const patchScore = player => (dispatch, getState) => {

    const id = getState().gameID;

    axios.patch(`/ping-pong/games/${id}/score`, {
        player: player
    }).then(({ data }) => {
        dispatch(increment(player));
    });
};


export const deleteGame = ID => (dispatch) => {

    axios.delete(`/ping-pong/games/${ID}`).then((response) => {
        dispatch(removeGame(ID));
    })
}