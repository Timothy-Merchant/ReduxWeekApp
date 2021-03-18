import { connect } from "react-redux";
import Buttons from "./Buttons";
import languages from "../../languages.json"
import { reset, changeLanguage } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleScoreReset: () => dispatch(reset("score")),
        handleGamesReset: () => dispatch(reset("games")),
        handleReset: () => dispatch(reset("hard")),
        changeLanguageEN: () => dispatch(changeLanguage("en")),
        changeLanguageJP: () => dispatch(changeLanguage("jp")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);