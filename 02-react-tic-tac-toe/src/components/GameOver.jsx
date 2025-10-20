export default function GameOver({ gameResult, onRestart }) {


    const gameOver = gameResult === 'Draw' ? <p>Draw ! No players could win this game...</p> : <p>{gameResult} won !</p>;

    return <div id="game-over">
        <h2>Game Over!</h2>
        {gameOver}
        <button onClick={onRestart}>Rematch</button>
    </div>
}