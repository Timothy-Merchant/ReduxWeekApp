import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Header from "./Header";
import Winner from "./Winner";
import Buttons from "./Buttons";
import GamesTable from "./GamesTable";

const App = ({
    changeLanguageJP,
    changeLanguageEN,
    handleP1Increment,
    handleP2Increment,
    handleReset,
    handleScoreReset,
}) => (
    <>
        <div className="container">

            {/* header */}
            <Header />

            {/* scores */}
            <div className="row mb-4">
                <Player1 handleIncrement={handleP1Increment} />
                <Player2 handleIncrement={handleP2Increment} />
            </div>

            { /* winner message */}
            <Winner />


            { /* buttons */}
            <Buttons handleScoreReset={handleScoreReset} handleReset={handleReset} changeLanguageEN={changeLanguageEN} changeLanguageJP={changeLanguageJP} />

            <hr />
            {/* Games table */}
            <GamesTable />
            <hr />

        </div>
    </>
);

export default App;