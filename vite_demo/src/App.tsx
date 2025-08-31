import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const getGreeting = () => {
  return 'Welcome to the World of React'
}

function App() {
 
  return (
    <>
     <p>{getGreeting()}</p>
    </>
  )
}

export default App
