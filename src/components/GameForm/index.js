import { connect } from "react-redux";
import GameForm from "./GameForm";
import languages from "../../languages.json"
import { reset, changeLanguage } from "../../data/actions"

const mapStateToProps = state => {
    return {
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleScoreReset: () => dispatch(reset(false)),
        handleReset: () => dispatch(reset(true)),
        changeLanguageEN: () => dispatch(changeLanguage("en")),
        changeLanguageJP: () => dispatch(changeLanguage("jp")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);