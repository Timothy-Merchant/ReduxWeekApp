const GamesTable = ({ getGames, games, language, languages }) => {
    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">{languages.player}</th>
                        <th scope="col">{languages.score}</th>
                        <th scope="col">{languages.didWin}</th>
                    </tr>
                </thead>
                {games.map((game, index) => (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">{languages.player1}</th>
                            <td>{game.player1}</td>
                            <td>{game.winner === 1 ? languages.won : languages.lost}</td>
                        </tr>
                        <tr>
                            <th scope="row">{languages.player2}</th>
                            <td>{game.player2}</td>
                            <td>{game.winner === 2 ? languages.won : languages.lost}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>)
}

export default GamesTable