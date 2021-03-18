import { connect } from "react-redux";
import GamesTable from "./GamesTable";
import languages from "../../languages.json"
import { deleteGame } from "../../data/actions/api"

const mapStateToProps = state => {
    return {
        games: state.games,
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteGame: (gameID) => dispatch(deleteGame(gameID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesTable);