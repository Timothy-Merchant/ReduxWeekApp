import { connect } from "react-redux";
import Player from "./Player";
import languages from "../../languages.json"
import { increment } from "../../data/actions";

const mapStateToProps = state => {
    return {
        playerID: 2,
        playerScore: state.player2,
        server: state.server,
        winner: state.winner,
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement: () => dispatch(increment("player2"))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);