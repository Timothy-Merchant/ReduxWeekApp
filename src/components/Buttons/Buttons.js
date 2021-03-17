const Buttons = ({ languages, handleScoreReset, handleGamesReset, handleReset }) => {
    return (
        <>
            <button onClick={handleScoreReset} style={{ marginRight: 20 + "px" }} className="btn btn-danger">
                {languages.resetScore}
            </button>
            <button onClick={handleGamesReset} style={{ marginRight: 20 + "px" }} className="btn btn-danger">
                {languages.resetScoreGames}
            </button>
            <button onClick={handleReset} style={{ marginRight: 20 + "px" }} className="btn btn-danger">
                {languages.resetHard}
            </button>
        </>
    )
}

export default Buttons;
