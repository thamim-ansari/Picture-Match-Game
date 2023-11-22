import './index.css'

const MatchItem = props => {
  const {imageDetails, onMatchGame} = props
  const {id, thumbnailUrl} = imageDetails
  const onClickMatch = () => {
    onMatchGame(id)
  }
  return (
    <li className="match-list-items">
      <button type="button" className="options-button" onClick={onClickMatch}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default MatchItem
