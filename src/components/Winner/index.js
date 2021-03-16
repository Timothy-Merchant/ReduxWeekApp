import { connect } from "react-redux";
import Winner from "./Winner";
import languages from "../../languages.json"

const mapStateToProps = state => {
    return {
        winner: state.winner,
        languages: state.language === "en" ? languages.en : languages.jp,
    };
};

export default connect(mapStateToProps)(Winner);