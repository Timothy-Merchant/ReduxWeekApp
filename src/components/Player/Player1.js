import { connect } from "react-redux";
import Player from "./Player";
import languages from "../../languages.json";
import { increment } from "../../data/actions";

const mapStateToProps = state => {
    return {
        playerID: 1,
        playerScore: state.player1,
        server: state.server,
        winner: state.winner,
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement: () => dispatch(increment("player1"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);