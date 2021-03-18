import { connect } from "react-redux";
import GameForm from "./GameForm";
import languages from "../../languages.json"
import { changeLanguage } from "../../data/actions/state"
import { postGame } from "../../data/actions/api"

const mapStateToProps = state => {
    return {
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        submitForm: (data) => dispatch(postGame(data)),
        changeLanguageEN: () => dispatch(changeLanguage("en")),
        changeLanguageJP: () => dispatch(changeLanguage("jp")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);