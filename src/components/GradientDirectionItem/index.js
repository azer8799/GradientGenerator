import {Button, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, clickedDirection} = props
  const {displayText, value} = details

  const onClickGradientDirectionItem = () => {
    clickedDirection(value)
  }

  return (
    <ListItem>
      <Button
        type="button"
        onClick={onClickGradientDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
