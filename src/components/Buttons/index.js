import { connect } from "react-redux";
import Buttons from "./Buttons";
import languages from "../../languages.json"

const mapStateToProps = state => {
    return {
        language: state.language,
        languages: state.language === "en" ? languages.en: languages.jp,
    };
};

export default connect(mapStateToProps)(Buttons);