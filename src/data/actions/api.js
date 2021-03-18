import axios from "../../axios";
import { loaded } from "./state"

export const getGames = () => {
    return (dispatch) => {
        axios.get("/ping-pong/games").then(({ data }) => {
            dispatch(loaded(data.data));
        });
    };
};