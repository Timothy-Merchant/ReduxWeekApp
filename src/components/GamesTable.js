const GamesTable = ({ games }) => {
    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Player</th>
                        <th scope="col">Score</th>
                        <th scope="col">Won?</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game, index) => (
                        <>
                            <tr key={index}>
                                <th scope="row">Player 1</th>
                                <td>{game.player1}</td>
                                <td>{game.winner === 1 ? "Won" : "Lost"}</td>
                            </tr>
                            <tr>
                                <th scope="row">Player 2</th>
                                <td>{game.player2}</td>
                                <td>{game.winner === 2 ? "Won" : "Lost"}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>)
}

export default GamesTable