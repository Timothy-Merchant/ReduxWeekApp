import ScoreBoard from "./components/ScoreBoard";

const App = ({
  playerID,
  handleP1Increment,
  handleP2Increment,
  p1Score,
  p2Score,
  handleReset,
  server,
  winner,
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
      <h1>PongPing</h1>
    </header>

    {/* scores */}
    <div className="row mb-4">
      <ScoreBoard playerID={1} playerScore={p1Score} handleIncrement={handleP1Increment} server={server} winner={winner} />
      <ScoreBoard playerID={2} playerScore={p2Score} handleIncrement={handleP2Increment} server={server} winner={winner} />
    </div>

    { /* winner message */}
    <h2 className="alert alert-success">{winner !== 0 ? `Player ${winner} wins!` : `Get to 21 points to win!`}</h2>

    <hr />

    { /* reset button */}
    <button onClick={handleReset} className="btn btn-danger">Reset</button>
  </>
);

export default App;