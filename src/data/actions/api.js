import axios from "../../axios";

export const getCounter = () => {
    return (dispatch) => {
        axios.get("/").then(({ data }) => {
            console.log(data);
        });
    };
};