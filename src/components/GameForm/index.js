import { connect } from "react-redux";
import GameForm from "./GameForm";
import languages from "../../languages.json"
import { changeLanguage, setInitialValues } from "../../data/actions"

const mapStateToProps = state => {
    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        pointsToWin: state.pointsToWin,
        pointsToChange: state.changeServer,
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (data) => dispatch(setInitialValues(data)),
        changeLanguageEN: () => dispatch(changeLanguage("en")),
        changeLanguageJP: () => dispatch(changeLanguage("jp")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);