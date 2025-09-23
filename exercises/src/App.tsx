import { useState } from 'react'
import Button from './TypescriptExercises/Button'

import './App.css'



function App() {

 
  return ( 
  <>
    <Button label="Button" onClick={()=>alert('clicked')}/>
    <Button label="2nd button" onClick={()=>alert('2nd clicked')}/>
  </>
    
    
  )
}

export default App
