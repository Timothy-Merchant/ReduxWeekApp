const Winner = ({ languages, winner }) => {

    return (
        <h2 className="alert alert-success">{winner !== 0 ?
            `${languages.player} ${winner} ${languages.winnerMsg}` :
            languages.preWinnerMsg}</h2>
    )

}

export default Winner;