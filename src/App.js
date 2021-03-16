import GamesTable from "./components/GamesTable";
import ScoreBoard from "./components/ScoreBoard";

const App = ({
  language,
  languages,
  changeLanguageJP,
  changeLanguageEN,
  p1ID,
  p2ID,
  handleP1Increment,
  handleP2Increment,
  p1Score,
  p2Score,
  handleReset,
  handleScoreReset,
  server,
  winner,
  games,
}) => (
  <>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    {/* header */}
    <header className="jumbotron mt-4 mb-0">
      <h1>{
        language === "en" ?
          languages.English.title :
          languages.Japanese.title
      }</h1>
    </header>

    {/* scores */}
    <div className="row mb-4">
      <ScoreBoard playerID={p1ID} playerScore={p1Score} handleIncrement={handleP1Increment} server={server} winner={winner} language={language} languages={languages} />
      <ScoreBoard playerID={p2ID} playerScore={p2Score} handleIncrement={handleP2Increment} server={server} winner={winner} language={language} languages={languages} />
    </div>

    { /* winner message */}
    <h2 className="alert alert-success">{winner !== 0 ?
      (language === "en" ?
        `${languages.English.player} ${winner} ${languages.English.winnerMsg}` :
        `${languages.Japanese.player} ${winner} ${languages.Japanese.winnerMsg}`)
      :
      (language === "en" ?
        `${languages.English.preWinnerMsg}` :
        `${languages.Japanese.preWinnerMsg}`)}</h2>


    { /* buttons */}
    <button onClick={handleScoreReset} style={{ marginRight: 20 + "px" }} className="btn btn-danger">
      {language === "en" ? languages.English.resetScore : languages.Japanese.resetScore}
    </button>
    <button onClick={handleReset} className="btn btn-danger">
      {language === "en" ? languages.English.resetScoreGames : languages.Japanese.resetScoreGames}
    </button>
    <button onClick={language === "en" ? changeLanguageJP : changeLanguageEN} style={{ marginLeft: 20 + "px" }} className="btn btn-danger">
      {language === "en" ? languages.Japanese.japanese : languages.English.english}
    </button>

    <hr />
    {/* Games table */}
    <GamesTable games={games} language={language} languages={languages} />
    <hr />

  </>
);

export default App;