import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
    return {
        startGame: state.gameStarted
    }
}

export default connect(mapStateToProps)(App);