// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  margin: 15px;
  color: #fff;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin: 15px;
  color: #fff;
`
export const ColorGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const ALlButtons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const ColorsContainer = styled.div`
  display: flex;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
`
export const Input = styled.input`
  margin: 15px;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 50px;
`
export const Button = styled.button`
  padding: 20px;
  border-radius: 15px;
  margin: 15px;
  color: #111;
  background-color: #00c9b7;
  border: none;
`
export const InputAlign = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
