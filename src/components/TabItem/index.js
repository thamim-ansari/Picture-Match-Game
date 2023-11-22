import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActiveTab} = props
  const {tabId, displayText} = tabDetails
  const onClickActiveTab = () => {
    setActiveTabId(tabId)
  }
  const buttonClass = isActiveTab ? 'tab-buttons active-tab' : 'tab-buttons'
  return (
    <li className="tab-items">
      <button type="button" onClick={onClickActiveTab} className={buttonClass}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
