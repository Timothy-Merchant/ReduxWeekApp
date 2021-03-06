import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Header from "../Header";
import Winner from "../Winner";
import Buttons from "../Buttons";
import GamesTable from "../GamesTable";
import GameForm from "../GameForm";
import LanguageButton from "../LanguageButton";
import Loading from "../Loading"

const App = ({ startGame }) => (


    startGame ?
        <>
            <Loading>
                <div className="container">

                    {/* header */}
                    <Header />

                    {/* scores */}
                    <div className="row mb-4">
                        <Player1 />
                        <Player2 />
                    </div>

                    { /* winner message */}
                    <Winner />

                    { /* buttons */}
                    <Buttons />
                    <LanguageButton />

                    <hr />
                    {/* Games table */}
                    <GamesTable />
                    <hr />

                </div>
            </Loading>
        </>
        :
        <>

            <div className="container">
                <Header />
                <GameForm />
            </div>

        </>
);

export default App;