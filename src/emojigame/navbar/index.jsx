import './index.css'

const NavBar = props => {
  const {score, topScore, isGameFinished} = props
  // const disableClassName = isGameFinished ? 'd-none' : ''
  let div
  if (isGameFinished === false) {
    div = (
      <div className="score-container">
        <p className="score-para">Score: {score}</p>
        <p className="topScore-para">Top Score: {topScore}</p>
      </div>
    )
  } else {
    null
  }
  return (
    <div className="navbar-container">
      <div className="emoji-game-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game-name-head">Emoji Game</h1>
      </div>
      {div}
    </div>
  )
}
export default NavBar
