const Player = ({ playerID, playerScore, player1Name, player2Name, handleIncrement, server, winner, language, languages }) => {

    const playerName = playerID === 1 ? player1Name : player2Name;

    return (
        <>
            <div className="col-md-6 mt-4">
                <div className={server === playerID ? "card text-center bg-dark text-white" : "card text-center"}>
                    <h5 className="card-header">
                        {`${languages.player} ${playerID}: ${playerName}`}
                    </h5>
                    <div className="card-body">
                        <p className="card-text display-1">{playerScore}</p>
                    </div>
                    <div className="card-footer">
                        <button disabled={winner > 0} onClick={handleIncrement} className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Player