import { connect } from "react-redux";
import Player from "./Player";
import languages from "../../languages.json"

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

export default connect(mapStateToProps)(Player);