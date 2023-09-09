import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Friends from './friends'

function App() {
  function handleClick(){
    alert('Button Clicked');
  }

  return (
    <>
    <Friends ></Friends>
      <h1>Vite + React</h1>
      <Counter></Counter>
      
      <button onClick={handleClick}>Click me</button>
    </>
  )
}


export default App
