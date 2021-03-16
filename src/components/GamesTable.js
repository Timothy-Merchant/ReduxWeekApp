const GamesTable = ({ games, language, languages }) => {
    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">{
                            language === "en" ? languages.English.player : languages.Japanese.player
                        }</th>
                        <th scope="col">
                            {language === "en" ? languages.English.score : languages.Japanese.score}
                        </th>
                        <th scope="col">
                            {language === "en" ? languages.English.didWin : languages.Japanese.didWin}
                        </th>
                    </tr>
                </thead>
                {games.map((game, index) => (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">
                                {language === "en" ? languages.English.player1 : languages.Japanese.player1}
                            </th>
                            <td>{game.player1}</td>
                            <td>{game.winner === 1 ?
                                language === "en" ? languages.English.won : languages.Japanese.won
                                :
                                language === "en" ? languages.English.lost : languages.Japanese.lost
                            }</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                {language === "en" ? languages.English.player2 : languages.Japanese.player2}
                            </th>
                            <td>{game.player2}</td>
                            <td>{game.winner === 2 ?
                                language === "en" ? languages.English.won : languages.Japanese.won
                                :
                                language === "en" ? languages.English.lost : languages.Japanese.lost
                            }</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>)
}

export default GamesTable