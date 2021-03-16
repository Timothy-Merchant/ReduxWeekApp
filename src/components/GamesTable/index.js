import { connect } from "react-redux";
import GamesTable from "./GamesTable";
import languages from "../../languages.json"

const mapStateToProps = state => {
    return {
        games: state.games,
        language: state.language,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

export default connect(mapStateToProps)(GamesTable);