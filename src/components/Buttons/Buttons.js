const Buttons = ({ languages, language, handleScoreReset, handleGamesReset, handleReset, changeLanguageEN, changeLanguageJP }) => {
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
            <button onClick={language === "en" ? changeLanguageJP : changeLanguageEN} className="btn btn-danger">
                {language === "en" ? "日本語" : "English"}
            </button>
        </>
    )
}

export default Buttons;
