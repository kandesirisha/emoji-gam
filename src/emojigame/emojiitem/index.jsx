import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onUpateScore = () => {
    onEmojiClick(id)
  }
  return (
    <li className="emoji-list-item-container">
      <button onClick={onUpateScore} className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
