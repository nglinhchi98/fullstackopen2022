import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  return (
    <div>
      <div>{counter}</div>
      <Button onClick={increaseByOne}
              text='plus' />
      <Button onClick={decreaseByOne}
              text='minus' />
      <Button onClick={setToZero}
              text='zero' />        
    </div>
    
  )
}

export default App