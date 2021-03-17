import { connect } from "react-redux";
import LanguageButton from "./LanguageButton";
import languages from "../../languages.json"
import { changeLanguage } from "../../data/actions"

const mapStateToProps = state => {
    return {
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageEN: () => dispatch(changeLanguage("en")),
        changeLanguageJP: () => dispatch(changeLanguage("jp"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageButton);