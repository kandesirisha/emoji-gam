import './index.css'

const WinOrLoseCard = props => {
  const {score, playGameAgain} = props

  const onPlayAgainClick = () => {
    playGameAgain(score)
  }

  let con
  if (score < 12) {
    con = (
      <div className="win-lose-whole-container">
        <div className="con">
          <h1 className="result-head">You Lose</h1>
          <p className="result-para1">Score</p>
          <p className="result">{score}/12</p>
          <button
            className="play-again-btn"
            type="button"
            onClick={onPlayAgainClick}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="win-lose-img"
          alt="win or lose"
        />
      </div>
    )
  } else {
    con = (
      <div className="win-lose-whole-container">
        <div className="con">
          <h1 className="result-head">You Won</h1>
          <p className="result-para">Best Score</p>
          <p className="result">{score}/12</p>
          <button
            className="play-again-btn"
            type="button"
            onClick={onPlayAgainClick}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="win-lose-img"
          alt="win or lose"
        />
      </div>
    )
  }
  return <div className="win-lose-container">{con}</div>
}
export default WinOrLoseCard
