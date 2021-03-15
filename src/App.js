const App = ({
  handleP1Increment,
  handleP2Increment,
  p1Score,
  p2Score,
  handleReset,
  server,
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
      <div className="col-md-6 mt-4">
        <div className={server === "player1" ? "card text-center bg-dark text-white" : "card text-center"}>
          <h5 className="card-header">Player 1</h5>
          <div className="card-body">
            <p className="card-text display-1">{p1Score}</p>
          </div>
          <div className="card-footer">
            <button onClick={handleP1Increment} className="form-control btn btn-success">+</button>
          </div>
        </div>
      </div>

      <div className="col-md-6 mt-4">
        <div className={server === "player2" ? "card text-center bg-dark text-white" : "card text-center"}>
          <h5 className="card-header">Player 2</h5>
          <div className="card-body">
            <p className="card-text display-1">{p2Score}</p>
          </div>
          <div className="card-footer">
            <button onClick={handleP2Increment} className="form-control btn btn-success">+</button>
          </div>
        </div>
      </div>
    </div>

    { /* winner message */}
    <h2 className="alert alert-success">Player {/* winning player here */} wins!</h2>

    <hr />

    { /* reset button */}
    <button onClick={handleReset} className="btn btn-danger">Reset</button>
  </>
);

export default App;