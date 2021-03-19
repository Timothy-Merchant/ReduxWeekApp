import { connect } from "react-redux";
import Player from "./Player";
import languages from "../../languages.json";
import { patchScore } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        playerID: 1,
        player1Name: state.formData.player1Name,
        playerScore: state.player1,
        server: state.server,
        winner: state.winner,
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleIncrement: () => dispatch(patchScore(1)),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);