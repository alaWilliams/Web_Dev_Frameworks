import './App.css'
import Question from './Question'



function App({question, options}) {
  return (
    <>
      <Question question={question} options={options}/>
    </>
  )
}

export default App
