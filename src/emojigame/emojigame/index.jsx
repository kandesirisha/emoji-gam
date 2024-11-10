
import {Component} from 'react'

import NavBar from  '../navbar/index'

import EmojiCard from '../emojiitem/index'

import WinOrLoseCard from '../winloss/index'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojiList: [],
    isGameFinished: false,
  }

  playGameAgain = score => {
    const {topScore} = this.state
    let tScore = topScore
    if (score > tScore) {
      tScore = score
    } else {
      tScore = tScore
    }
    this.setState({
      score: 0,
      topScore: tScore,
      isGameFinished: false,
      clickedEmojiList: [],
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClick = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state

    if (clickedEmojiList.includes(id)) {
      this.setState({isGameFinished: true})
    } else {
      if (emojisList.length - 1 === clickedEmojiList.length) {
        this.setState({isGameFinished: true})
      }
      this.shuffledEmojisList()
      this.setState(pervState => ({
        clickedEmojiList: [...pervState.clickedEmojiList, id],
        score: pervState.score + 1,
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isGameFinished} = this.state
    let container
    if (isGameFinished === false) {
      container = (
        <ul className="emoji-list-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              onEmojiClick={this.onEmojiClick}
            />
          ))}
        </ul>
      )
    } else {
      container = (
        <WinOrLoseCard score={score} playGameAgain={this.playGameAgain} />
      )
    }
    return (
      <div className="whole-bg-container">
        <NavBar
          score={score}
          topScore={topScore}
          isGameFinished={isGameFinished}
        />
        <div className="inner-container">{container}</div>
      </div>
    )
  }
}
export default EmojiGame
