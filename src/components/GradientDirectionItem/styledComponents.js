// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
  padding: 20px;
  border-radius: 15px;
  margin: 15px;
  color: ${props => (props.isActive ? 'Black' : 'transparent')}
  background-color: #ffffff;
  border: none;
  width: 100px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
export const ListItem = styled.li`
  list-style-type: none;
  width: 49%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
