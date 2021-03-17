const Buttons = ({ languages, language, handleScoreReset, handleReset, changeLanguageEN, changeLanguageJP }) => {
    return (
        <>
            <button onClick={handleScoreReset} style={{ marginRight: 20 + "px" }} className="btn btn-danger">
                {languages.resetScore}
            </button>
            <button onClick={handleReset} className="btn btn-danger">
                {languages.resetScoreGames}
            </button>
            <button onClick={language === "en" ? changeLanguageJP : changeLanguageEN} style={{ marginLeft: 20 + "px" }} className="btn btn-danger">
                {language === "en" ? "日本語" : "English"}
            </button>
        </>
    )
}

export default Buttons;
