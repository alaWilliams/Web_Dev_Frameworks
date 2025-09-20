import Option from "./Option"

function Question (props) {
  return (
      <div className='question'>
        <h1 style={{margin: '0 auto'}}>{props.question}</h1>
        {props.options.map((option, index) => (
        <Option key={index} option = {option}/>
      ))}
      </div>
      
  )

}

export default Question