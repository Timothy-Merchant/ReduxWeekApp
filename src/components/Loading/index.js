import { connect } from "react-redux";
import Loading from "./Loading";
import { getGames } from "../../data/actions/api"

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);