import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Container,
  Heading,
  Para,
  ColorsContainer,
  ColorGroup,
  Form,
  Input,
  Button,
  ALlButtons,
  InputAlign,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  changeFirst = event => {
    this.setState({firstColor: event.target.value})
  }

  changeSecond = event => {
    this.setState({secondColor: event.target.value})
  }

  onFormSubmit = event => {
    console.log('clicked')
    event.preventDefault()
    const {firstColor, secondColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection},${firstColor},${secondColor}`,
    })
  }

  clickedDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      firstColor,
      secondColor,
      gradientValue,
      activeGradientDirection,
    } = this.state
    return (
      <Container data-testid="gradientGenerator" gradientValue={gradientValue}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <ALlButtons>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              clickedDirection={this.clickedDirection}
              details={eachItem}
              isActive={activeGradientDirection === eachItem.value}
            />
          ))}
        </ALlButtons>
        <Para>Pick the Colors</Para>
        <ColorsContainer>
          <Form onSubmit={this.onFormSubmit}>
            <InputAlign>
              <ColorGroup>
                <Para>{firstColor}</Para>
                <Input
                  value={firstColor}
                  type="color"
                  onChange={this.changeFirst}
                />
              </ColorGroup>
              <ColorGroup>
                <Para>{secondColor}</Para>
                <Input
                  value={secondColor}
                  type="color"
                  onChange={this.changeSecond}
                />
              </ColorGroup>
            </InputAlign>
            <Button type="submit">Generate</Button>
          </Form>
        </ColorsContainer>
      </Container>
    )
  }
}

export default GradientGenerator
