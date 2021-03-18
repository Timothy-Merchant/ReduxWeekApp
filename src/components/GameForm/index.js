import { connect } from "react-redux";
import GameForm from "./GameForm";
import languages from "../../languages.json"
import { changeLanguage} from "../../data/actions/state"
import { postGame } from "../../data/actions/api"

const mapStateToProps = state => {
    return {
        player1Name: state.formData.player1Name,
        player2Name: state.formData.player2Name,
        pointsToWin: state.formData.pointsToWin,
        pointsToChange: state.formData.pointsToChange,
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