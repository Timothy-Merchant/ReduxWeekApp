const GamesTable = ({ getGames, deleteGame, games, language, languages }) => {
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
                            <td>{game.player_1.score}</td>
                            <td>{game.player_1.winner === 1 ? languages.won : languages.lost}</td>
                            <td><button onClick={() => deleteGame(game.id)}>x</button></td>
                        </tr>
                        <tr>
                            <th scope="row">{languages.player2}</th>
                            <td>{game.player_2.score}</td>
                            <td>{game.player_2.winner ? languages.won : languages.lost}</td>
                        </tr>


                    </tbody>
                ))}
            </table>
        </>)
}

export default GamesTable